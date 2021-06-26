import {Request, Response} from 'express';
import { IUpvotePostCreate, UpvotePostService } from '../services/UpvotePostService';

class UpvotePostController{


   async create(request: Request, response: Response): Promise<Response>{
        const {post_id, user_id}: IUpvotePostCreate = request.body;
        try{
        const upvotePostService = new UpvotePostService();
        
       const upvoted = await upvotePostService.upvote({post_id, user_id})  
       return response.json(upvoted)
        }catch(err){
        return response.status(400).json({
            messageError: err.message
        })
        }
    
    }



}

export {UpvotePostController};