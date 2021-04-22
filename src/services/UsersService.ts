import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../respositories/UsersRepository';

interface IUsersCreate {
    email: string
}

class UsersService{
    
   async create({email}: IUsersCreate){
    const usersRepository = getCustomRepository(UsersRepository);
    const Users = usersRepository.create({email})
    
    const userAlteradyExists = await usersRepository.findOne({
        email
    })

    if(userAlteradyExists){
        return userAlteradyExists;
    }

    await usersRepository.save(Users);

    return Users;
   }




}

export {UsersService};