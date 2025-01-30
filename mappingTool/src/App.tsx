import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import YAML from "yaml";

// Type Definitions
interface JsonObject {
  [key: string]: any;
}

interface SwaggerSchema {
  type?: string;
  properties?: { [key: string]: SwaggerSchema };
}

interface SwaggerObject {
  components?: {
    schemas?: {
      [key: string]: SwaggerSchema;
    };
  };
  definitions?: {
    [key: string]: SwaggerSchema;
  };
}

const App: React.FC = () => {
  const [swaggerInput, setSwaggerInput] = useState<string>("");
  const [concertoModel, setConcertoModel] = useState<string>("");
  const [mongooseSchema, setMongooseSchema] = useState<string>("");

  const fetchSwaggerFile = async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch Swagger file");
      }
      const text = await response.text();
      setSwaggerInput(text);
    } catch (error) {
      alert("Error fetching Swagger file: " + (error as Error).message);
    }
  };

  const handleTransform = () => {
    try {
      const swaggerObject: SwaggerObject = YAML.parse(swaggerInput);
      const schemas = swaggerObject.components?.schemas || swaggerObject.definitions;

      if (!schemas) {
        throw new Error("Invalid Swagger file: Missing components.schemas or definitions");
      }

      const generateConcertoModels = (schemas: { [key: string]: SwaggerSchema }): string => {
        let models = "namespace org.example\n\n";

  for (const schemaName in schemas) {
          models+= `@Term("${schemaName}")\n`;
          models+= `@Crud("Createable,Readable,Updateable")\n`;
          models += `concept ${schemaName} identified by ${schemaName}Id {\n`;
          models+= `\t@Term("${schemaName}Id")\n`;
          models+= `\t@Crud("Createable,Readable,Updateable")\n`;
          models += `\t  o String ${schemaName}Id otpional\n`;

          const properties = schemas[schemaName].properties || {};
          for (const propName in properties) {
            const prop = properties[propName];
            const type = prop.type;
            models+= `\t@Term("${propName}")\n`;
            models+= `\t@Crud("Createable,Readable,Updateable")\n`;

            if (type === "string") models += `\t  o String ${propName}\n`;
            else if (type === "number" || type === "integer") models += `\t  o Double ${propName}\n`;
            else if (type === "boolean") models += `\t  o Boolean ${propName}\n`;
            else if (type === "object") {
              const conceptName = propName.charAt(0).toUpperCase() + propName.slice(1);
              models += `\t  --> ${conceptName} ${propName}\n`;
            }
          }

          models += "}\n\n";
        }
        return models;
      };

      const generateMongooseSchemas = (schemas: { [key: string]: SwaggerSchema }): string => {
        let mongooseSchemas = "const mongoose = require('mongoose');\n\n";

        for (const schemaName in schemas) {
          mongooseSchemas += `const ${schemaName}Schema = new mongoose.Schema({\n`;
          const properties = schemas[schemaName].properties || {};

          for (const propName in properties) {
            const prop = properties[propName];
            const type = prop.type;

            if (type === "string") mongooseSchemas += `\t  ${propName}: { type: String },\n`;
            else if (type === "number" || type === "integer") mongooseSchemas += `  ${propName}: {\t type: Number },\n`;
            else if (type === "boolean") mongooseSchemas += `\t  ${propName}: { type: Boolean },\n`;
            else if (type === "object") mongooseSchemas += `\t  ${propName}: { type: Object },\n`;
          }

          mongooseSchemas += "});\n\n";
          mongooseSchemas += `module.exports.${schemaName} = mongoose.model('${schemaName}', ${schemaName}Schema);\n\n`;
        }
        return mongooseSchemas;
      };

      setConcertoModel(generateConcertoModels(schemas));
      setMongooseSchema(generateMongooseSchemas(schemas));
    } catch (error) {
      alert("Invalid Swagger input: " + (error as Error).message);
    }
  };

  const handleExport = (content: string, filename: string) => {
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  };

  return (
    <div className="p-4 max-w-4xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Swagger to Concerto & Mongoose Generator</h1>
      <Card>
        <CardContent>
          <TextareaAutosize
            placeholder="Paste your Swagger YAML here"
            minRows={8}
            value={swaggerInput}
            onChange={(e) => setSwaggerInput(e.target.value)}
            style={{ width: "100%", marginBottom: "1rem" }}
          />
          <Button variant="contained" onClick={handleTransform}>Transform</Button>
          <Button variant="contained" onClick={() => fetchSwaggerFile(prompt("Enter Swagger file URL:"))}>
            Fetch Swagger File
          </Button>
        </CardContent>
      </Card>

      {concertoModel && (
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold">Concerto Models</h2>
            <TextareaAutosize
              readOnly
              value={concertoModel}
              minRows={8}
              style={{ width: "100%", marginBottom: "1rem" }}
            />
            <Button variant="contained" onClick={() => handleExport(concertoModel, "ConcertoModels.cto")}>
              Export Concerto Models
            </Button>
          </CardContent>
        </Card>
      )}

      {mongooseSchema && (
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold">Mongoose Schemas</h2>
            <TextareaAutosize
              readOnly
              value={mongooseSchema}
              minRows={8}
              style={{ width: "100%", marginBottom: "1rem" }}
            />
            <Button variant="contained" onClick={() => handleExport(mongooseSchema, "MongooseSchemas.js")}>
              Export Mongoose Schemas
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default App;