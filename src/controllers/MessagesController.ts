import {Request, Response} from 'express';
import { MessagesService } from '../services/MessagesService';

class MessagesController{


   async create(request: Request, response: Response): Promise<Response>{
        const {operator_id, user_id, text} = request.body;
        try{
        const messagesService = new MessagesService();
        const message = await messagesService.create({operator_id, user_id, text})  
        return response.json(message)
        }catch(err){
        return response.status(400).json({
            messageError: err.message
        })
        }
    
    }


    async showMessagesUser(request: Request, response: Response): Promise<Response>{
        const {user_id} = request.params;
        try{
        const messagesService = new MessagesService();
        const messages = await messagesService.showMessagesUser(user_id)  
        return response.json(messages)
        }catch(err){
        return response.status(400).json({
            messageError: err.message
        })
        }
    
    }

}

export {MessagesController};