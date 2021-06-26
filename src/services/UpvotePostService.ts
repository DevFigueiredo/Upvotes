import { getCustomRepository, Repository } from 'typeorm';
import { UpvotePost } from '../entities/UpvotePost';
import { UpvotePostRepository } from '../respositories/UpvotePostRepository';

export interface IUpvotePost {
    post_id: string, 
    user_id: string,
    id?: string
}

export interface IUpvotePostCreate {
    post_id: string, 
    user_id: string,
}

export interface IUpvoteUpdate {
    id: string, 
    status: boolean,
}

class UpvotePostService{

    private UpvotePostRepository: Repository<UpvotePost>;

    constructor (){
        this.UpvotePostRepository = getCustomRepository(UpvotePostRepository);
    }
    
   async upvote({post_id, user_id}: IUpvotePost){
    
    const UpvoteAlreadyExists = await this.UpvotePostRepository.findOne({post_id, user_id})
    
    if(UpvoteAlreadyExists){
        const id = UpvoteAlreadyExists.id
     if(!UpvoteAlreadyExists.status){
      return await this.update({id, status: true})//Ativa a curtida realizada
     }else{
        return await this.update({id, status: false})//Inativa a curtida realizada
    }
    }

    const UpvotePost = this.create({post_id, user_id})

    return UpvotePost;
   }


    
   async create({post_id, user_id}: IUpvotePostCreate){
    const UpvotePost = this.UpvotePostRepository.create({post_id, user_id})
    await this.UpvotePostRepository.save(UpvotePost);
    return UpvotePost;
   }

    
   async update({id, status}: IUpvoteUpdate){
    const UpvoteAlreadyExists = await this.UpvotePostRepository.findOne({id})

    return this.UpvotePostRepository.save({...UpvoteAlreadyExists, status})
}



}

export {UpvotePostService};