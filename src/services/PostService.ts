import { getCustomRepository, Repository } from 'typeorm';
import { PostRepository } from '../respositories/PostRepository';
import {Post} from '../entities/Post'
import { UpvotePostRepository } from '../respositories/UpvotePostRepository';
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

   async all(){
     const post = await this.PostRepository.query(
         `SELECT A.ID, A.post_text, A.user_id, A.created_at, A.updated_at,C.id as user_id, c.name, COUNT(B.id) as total_upvotes FROM POST A
         LEFT JOIN UpvotesPost B ON (B.post_id=A.ID and b.status=1)
         LEFT JOIN User C ON C.id=A.user_id
         GROUP BY A.ID, A.post_text, A.user_id, A.created_at, A.updated_at, C.id, c.name
         `)

     
  
    return post;
   

   }

 



}

export {PostService};