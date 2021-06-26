import { getCustomRepository, Repository } from 'typeorm';
import { User } from '../entities/User';
import { UserRepository } from '../respositories/UserRepository';

export interface IUserCreate {
    username: string,
    name: string
}

class UserService{

    private userRepository: Repository<User>;

    constructor (){
        this.userRepository = getCustomRepository(UserRepository);
    }
    
   async create({username, name}: IUserCreate){
    const User = this.userRepository.create({name, username})
    
    const userAlteradyExists = await this.userRepository.findOne({
        username
    })

    if(userAlteradyExists){
        throw new Error("User alerady exists!");
    }

    await this.userRepository.save(User);

    return User;
   }




}

export {UserService};