import express,{json} from 'express';
import "reflect-metadata";
import './database'
import {routes} from './routes';
import * as dotenv from 'dotenv';
import SwaggerUI from 'swagger-ui-express';
import SwaggerJsDoc from 'swagger-jsdoc';
dotenv.config();

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
          title: 'Upvote API Swagger',
          description: 'Customer Upvote API Information',
          version: '1.0.0',
        },
        contact:{
          name: "Daniel Miranda de Figueiredo",
          github: "DevFigueiredo",
          cellphone: "(12) 98194-8265"
        }
      },
      apis: ['./src/routes.ts'], // files containing annotations as above
}

const app = express();
const SwaggerDocs = SwaggerJsDoc(swaggerOptions);


app.use(json())
app.use(routes);
app.use('/api-docs',SwaggerUI.serve, SwaggerUI.setup(SwaggerDocs))




export {app};