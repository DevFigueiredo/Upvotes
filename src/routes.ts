import {Router} from 'express';
import {UpvotePostController} from './controllers/UpvotePostController';
import { UserController } from './controllers/UserController';
import { PostController } from './controllers/PostController'

const routes = Router();

const upvotePostController = new UpvotePostController();
const userController = new UserController();
const postController = new PostController();

routes.post("/upvotepost", upvotePostController.create);
routes.post("/user/create", userController.create);
routes.post("/post/create", postController.create);
routes.get("/post/all", postController.all);
// routes.get("/messages/:user_id", postController.showMessagesUser);


export {routes};