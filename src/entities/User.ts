import {Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, EntityColumnNotFound} from 'typeorm';
import {v4 as UUID} from 'uuid';

@Entity("User")
class User{
 @PrimaryColumn()
 id: string;
 
 @Column()
 username: string;

 @Column()
 name: string;
 
 
 @UpdateDateColumn()
 updated_at: Date;
 
 @CreateDateColumn()
 created_at: Date;

  constructor(){
      if(!this.id){
          this.id = UUID();
      }
  }

}

export {User};