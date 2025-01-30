import { SwaggerSchema } from "./types";

// Generate Concerto Models from Swagger schemas
export const generateConcertoModels = (schemas: { [key: string]: SwaggerSchema }): string => {
    let models = "namespace org.example\n\n";
    
    const processSchema = (schemaName: string, schema: SwaggerSchema, depth = 0): string => {    
      console.log('## name:'+schemaName)  ;    
      let result = "";       
      
      const indentation = "\t".repeat(depth);
  
      result += `${indentation}@Term("${schemaName}")\n`;
      result += `${indentation}@Crud("Createable,Readable,Updateable")\n`;
      result += `${indentation}concept ${schemaName} identified by ${schemaName}Id {\n`;
      result += `${indentation}\t@Term("${schemaName}Id")\n`;
      result += `${indentation}\t@Crud("Createable,Readable,Updateable")\n`;
      result += `${indentation}\t  o String ${schemaName}Id optional\n`;
  
      const properties = schema.properties || {};
      for (const propName in properties) {
        const prop = properties[propName];
        console.log('prop name:'+propName);
        console.log('prop type:'+prop.type);        
  
        result += `${indentation}\t@Term("${propName}")\n`;
        result += `${indentation}\t@Crud("Createable,Readable,Updateable")\n`;
  
        if (prop.type === "string") {
          result += `${indentation}\t  o String ${propName}\n`;
        } else if (prop.type === "number" || prop.type === "integer") {
          result += `${indentation}\t  o Double ${propName}\n`;
        } else if (prop.type === "boolean") {
          result += `${indentation}\t  o Boolean ${propName}\n`;
        } else if (prop.type === "array" && prop.items) {
           if (prop.items.type === "object") {            
            const nestedType =  propName.charAt(0).toUpperCase() + propName.slice(1);
            result += `${indentation}\t  --> ${nestedType}[] ${schemaName}_${propName} optional\n`;          
           
          models += processSchema(nestedType, prop.items, depth + 1);
            
            //models += processSchema(nestedType, prop.items, 0);
          } else {
            result += `${indentation}\t  o ${prop.items.type}[] ${propName}\n`;
          }
        } else if (prop.type === "object") {            
          const nestedType = propName.charAt(0).toUpperCase() + propName.slice(1);
          //const nestedType = `${schemaName}_${propName}`;
          result += `${indentation}\t  -->  ${nestedType} ${schemaName}_${propName} optional \n`;
          models += processSchema(nestedType, prop, depth + 1);
        }
      }
  
      result += `${indentation}}\n\n`;
      return result;
    };
  
    for (const schemaName in schemas) {
      models += processSchema(schemaName, schemas[schemaName]);
    }
  
    return models;
  };
  
  


export const generateMongooseInterfaces = (schemas: { [key: string]: SwaggerSchema }): string => {
    let mongooseSchemas = "import { Schema, model } from 'mongoose';\n\n";
  
    const processSchema = (schemaName: string, schema: SwaggerSchema, depth = 0): string => {
      let result = "";
      const indentation = "\t".repeat(depth);
  
      result += `${indentation}const ${schemaName}Schema = new Schema({\n`;
  
      const properties = schema.properties || {};
      for (const propName in properties) {
        const prop = properties[propName];
  
        if (prop.type === "string") {
          result += `${indentation}\t${propName}: { type: String },\n`;
        } else if (prop.type === "number" || prop.type === "integer") {
          result += `${indentation}\t${propName}: { type: Number },\n`;
        } else if (prop.type === "boolean") {
          result += `${indentation}\t${propName}: { type: Boolean },\n`;
        } else if (prop.type === "array" && prop.items) {
          if (prop.items.type === "object") {
            const nestedType = `${schemaName}_${propName}`;
            result += `${indentation}\t${propName}: [{ type: Schema.Types.Mixed }],\n`;
            mongooseSchemas += processSchema(nestedType, prop.items, depth + 1);
          } else {
            result += `${indentation}\t${propName}: [{ type: ${prop.items.type} }],\n`;
          }
        } else if (prop.type === "object") {
          const nestedType = `${schemaName}_${propName}`;
          result += `${indentation}\t${propName}: { type: Schema.Types.Mixed },\n`;
          mongooseSchemas += processSchema(nestedType, prop, depth + 1);
        }
      }
  
      result += `${indentation}});\n\n`;
      result += `${indentation}export const ${schemaName} = model('${schemaName}', ${schemaName}Schema);\n\n`;
      return result;
    };
  
    for (const schemaName in schemas) {
      mongooseSchemas += processSchema(schemaName, schemas[schemaName]);
    }
  
    return mongooseSchemas;
  };


  