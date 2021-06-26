import { Post } from "../entities/Post";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(Post)
export class PostRepository extends Repository<Post>{}