import {Router} from 'express';
import {UpvotePostController} from './controllers/UpvotePostController';
import { UserController } from './controllers/UserController';
import { PostController } from './controllers/PostController'
const routes = Router();

const upvotePostController = new UpvotePostController();
const userController = new UserController();
const postController = new PostController();


/**
 * @openapi
*paths:
*  /user/create:
*    post:
*      summary: Create User.
*      consumes:
*        - application/json
*      parameters:
*        - in: body
*          name: user
*          description: Create a new User.
*          schema:
*            type: object
*            required:
*              - username
*              - name
*            properties:
*              username:
*                type: string
*              name:
*                type: string
*      responses:
*        201:
*          description: Created
 */
routes.post("/user/create", userController.create);



/**
 * @openapi
*paths:
*  /post/create:
*    post:
*      summary: Create Post.
*      consumes:
*        - application/json
*      parameters:
*        - in: body
*          name: user
*          description: Create a new post.
*          schema:
*            type: object
*            required:
*              - user_id
*              - post_text
*            properties:
*              user_id:
*                type: string
*              post_text:
*                type: string
*      responses:
*        201:
*          description: Created
 */
routes.post("/post/create", postController.create);



/**
 * @openapi
*paths:
*  /upvotepost:
*    post:
*      summary: Upvote post.
*      consumes:
*        - application/json
*      parameters:
*        - in: body
*          name: user
*          description: Upvote a created post.
*          schema:
*            type: object
*            required:
*              - user_id
*              - post_id
*            properties:
*              user_id:
*                type: string
*              post_id:
*                type: string
*      responses:
*        200:
*          description: OK
 */
routes.post("/upvotepost", upvotePostController.create);



/**
 * @openapi
*paths:
*  /post/all:
*    get:
*      summary: Create User.
*      consumes:
*        - application/json
*      parameters:
*        - in: body
*          name: user
*          description: List all posts created.
*          schema:
*            type: object
*            required:
*              - username
*              - name
*            properties:
*              username:
*                type: string
*              name:
*                type: string
*      responses:
*        200:
*          description: Created
 */
routes.get("/post/all", postController.all);
// routes.get("/messages/:user_id", postController.showMessagesUser);


export {routes};