import { User } from "../entities/User";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(User)
export class UserRepository extends Repository<User>{}