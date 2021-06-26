import {Request, Response} from 'express';
import { IPostCreate, PostService } from '../services/PostService';

class PostController{


   async create(request: Request, response: Response): Promise<Response>{
        const {post_text, user_id}: IPostCreate = request.body;
        try{
        const postService = new PostService();
        const message = await postService.create({user_id, post_text})  
        return response.json(message)
        }catch(err){
        return response.status(400).json({
            messageError: err.message
        })
        }
    
    }


}

export {PostController};