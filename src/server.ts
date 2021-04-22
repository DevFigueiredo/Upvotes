import express,{json} from 'express';
import "reflect-metadata";
import './database'
import {routes} from './routes';
import * as dotenv from 'dotenv';

dotenv.config();


const app = express();

app.use(json())
app.use(routes);
app.listen(process.env.SERVER_PORT, ()=>{
    console.log("Server is running on port "+ process.env.SERVER_PORT)
});