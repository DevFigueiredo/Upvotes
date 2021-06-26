import { getCustomRepository, Repository } from 'typeorm';
import { PostRepository } from '../respositories/PostRepository';
import {Post} from '../entities/Post'
export interface IPostCreate{
    post_text: string,
    user_id: string,
}


class PostService{
    
   private PostRepository: Repository<Post>;

   constructor (){
       this.PostRepository = getCustomRepository(PostRepository);
   }


   async create({user_id, post_text}: IPostCreate){
    const Post = await this.PostRepository.create({user_id, post_text})
    await this.PostRepository.save(Post);
    
    return Post;
   

   }

 



}

export {PostService};