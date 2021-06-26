import { getCustomRepository, Repository } from 'typeorm';
import { UpvotePost } from '../entities/UpvotePost';
import { UpvotePostRepository } from '../respositories/UpvotePostRepository';

interface ISeetingsCreate {
    post_id: string, 
    user_id: string
}

class UpvotePostService{

    private UpvotePostRepository: Repository<UpvotePost>;

    constructor (){
        this.UpvotePostRepository = getCustomRepository(UpvotePostRepository);
    }
    
   async create({post_id, user_id}: ISeetingsCreate){
    
    const UpvoteAlreadyExists = await this.UpvotePostRepository.findOne({
        post_id, user_id
    })
    
    if(UpvoteAlreadyExists){
     if(UpvoteAlreadyExists.status){
      return this.UpvotePostRepository.update(UpvoteAlreadyExists.id, {status: false})//Inativa a curtida realizada
     }else{
      return this.UpvotePostRepository.update(UpvoteAlreadyExists.id, {status: true})//Reativa a curtida realizada
     }

        
    }

    const UpvotePost = this.UpvotePostRepository.create({post_id, user_id})
    await this.UpvotePostRepository.save(UpvotePost);

    return UpvotePost;
   }




}

export {UpvotePostService};