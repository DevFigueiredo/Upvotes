import {Entity, Column, CreateDateColumn, PrimaryColumn, JoinColumn, ManyToOne} from 'typeorm';
import {User} from './User';
import {v4 as UUID} from 'uuid';

@Entity("Post")
class Post{
 @PrimaryColumn()
 id: string;
 
 @Column()
 post_text: string;
 
@JoinColumn({name: "user_id"})
@ManyToOne(()=>User)
user: User;

 @Column()
 user_id: string;

 
 @CreateDateColumn()
 created_at: Date;

  constructor(){
      if(!this.id){
          this.id = UUID();
      }
  }

}

export {Post};