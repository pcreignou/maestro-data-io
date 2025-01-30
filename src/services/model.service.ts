import YAML from "yaml";
import { generateConcertoModels, generateMongooseInterfaces } from "../utils/transformer";
import { Request, Response } from "express";
import axios from "axios";




const fs = require("fs-extra");
const path = require("path");
const bodyParser = require("body-parser");


const MODELS_DIR = path.join(__dirname, "../../models");
const SWAGGERS_DIR = path.join(__dirname, "swaggers");


// Ensure directories exist
fs.ensureDirSync(MODELS_DIR);
fs.ensureDirSync(SWAGGERS_DIR);

// Create a 'models' folder if it doesn't exist
const modelsDir = path.join(__dirname, "../../models");

if (!fs.existsSync(modelsDir)) {
  fs.mkdirSync(modelsDir);
}

// Fetch Swagger from URL and convert to Concerto and Mongoose models
export const saveModel = async (req: Request, res: Response) => {
  const { url } = req.body; // Swagger URL provided in the request body

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  try {
    // Fetch the Swagger YAML
    const response = await axios.get(url, { headers: { Accept: "application/yaml" } });
    const swaggerYAML = response.data;

    // Parse the Swagger YAML into an object
    const swaggerObject = YAML.parse(swaggerYAML);

    // Extract `info.title`
    //const title = swaggerObject.info?.title || "org.docusign.maestro";
    const title =  "org.docusign.maestro@1.0.0";
    const schemas = swaggerObject.components?.schemas || swaggerObject.definitions;

    if (!schemas) {
      return res.status(400).json({ error: "Invalid Swagger file: Missing schemas or definitions" });
    }

    // Generate Concerto Models and Mongoose Interfaces
    const concertoModel = generateConcertoModels(schemas);
    const mongooseInterface = generateMongooseInterfaces(schemas);

    // Save the Concerto model to a file
    const concertoModelPath = path.join(modelsDir, "ConcertoModels.cto");
    fs.writeFileSync(concertoModelPath, concertoModel, "utf-8");

    // Save the Mongoose interface to a file
    const mongooseInterfacePath = path.join(modelsDir, "MongooseInterfaces.ts");
    fs.writeFileSync(mongooseInterfacePath, mongooseInterface, "utf-8");

    // Save Swagger TypeScript interface to a file
    const swaggerTypesPath = path.join(modelsDir, "SwaggerTypes.ts");
    fs.writeFileSync(swaggerTypesPath, `// Swagger Types for generated models\n${JSON.stringify(schemas, null, 2)}`, "utf-8");

    // Send the response
    return res.status(200).json({
      message: "Files saved successfully!",
      files: {
        concertoModel: "ConcertoModels.cto",
        mongooseInterface: "MongooseInterfaces.ts",
        swaggerTypes: "SwaggerTypes.ts",
      },
    });
  } catch (error) {
    return res.status(500).json({ error: `Error fetching or transforming Swagger: ${error.message}` });
  }
};