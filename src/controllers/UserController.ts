import {Request, Response} from 'express';
import { IUserCreate, UserService } from '../services/UserService';

class UserController{


   async create(request: Request, response: Response): Promise<Response>{
        const {name, username}: IUserCreate = request.body;
        try{
        const usersService = new UserService();
        const users = await usersService.create({name,username})  
        return response.json(users)
        }catch(err){
        return response.status(400).json({
            messageError: err.message
        })
        }
    
    }



}

export {UserController};