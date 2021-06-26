import { UpvotePost } from "../entities/UpvotePost";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(UpvotePost)
export class UpvotePostRepository extends Repository<UpvotePost>{}