import {Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, EntityColumnNotFound, JoinColumn, ManyToOne} from 'typeorm';
import {v4 as UUID} from 'uuid';
import { Post } from './Post';
import { User } from './User';

@Entity("UpvotesPost")
class UpvotePost{
 @PrimaryColumn()
 id: string;
 
 @Column()
 user_id: string;


 @Column()
 post_id: string;

 @Column()
 status: boolean

@JoinColumn({name: "user_id"})
@ManyToOne(()=>User)
user: User;


@JoinColumn({name: "post_id"})
@ManyToOne(()=>Post)
posts: Post;


@UpdateDateColumn()
updated_at: Date;

@CreateDateColumn()
created_at: Date;

  constructor(){
      if(!this.id){
          this.id = UUID();
      }
      if(!this.status){
      this.status=true;
      }
  }

}

export {UpvotePost};