import { Router } from "express";
import {PostController} from "../controllers/post.controller.js";
import {PostService} from "../services/posts.service.js";

export class PostRoutes {

  static get routes() {

    const postRouter = Router();
    const postService = new PostService();
    const postController = new PostController(postService);

    postRouter.get('/', postController.getPosts);
    postRouter.post('/', postController.createPost);
    postRouter.delete('/:postId', postController.deletePostById);
    postRouter.put('/like/:postId', postController.addLikePost);

    return postRouter;
  }

}