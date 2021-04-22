import { getCustomRepository } from 'typeorm';
import { SettingsRepository } from '../respositories/SettingsRepository';

interface ISeetingsCreate {
    chat: boolean, 
    username: string
}

class SettingsService{
    
   async create({chat, username}: ISeetingsCreate){
    const settingsRepository = getCustomRepository(SettingsRepository);
    const Settings = settingsRepository.create({username, chat})
    
    const userAlteradyExists = await settingsRepository.findOne({
        username
    })
    if(userAlteradyExists){
        throw new Error("User alerady exists!");
    }

    await settingsRepository.save(Settings);

    return Settings;
   }




}

export {SettingsService};