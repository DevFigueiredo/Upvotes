import {Request, Response} from 'express';
import { SettingsService } from '../services/SettingsService';

class SettingsController{


   async create(request: Request, response: Response): Promise<Response>{
        const {username, chat} = request.body;
        try{
        const settingsService = new SettingsService();
        const settings = await settingsService.create({chat, username})  
        return response.json(settings)
        }catch(err){
        return response.status(400).json({
            messageError: err.message
        })
        }
    
    }



}

export {SettingsController};