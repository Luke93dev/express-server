import express from 'express';

import Post from './post.interface';
import validationMiddleware from '../../middleware/validation.middleware';
import CreatePostDto from './post.dto';

import { PostsControllerDependencies } from "./index";
 
class PostsController {
  public path = '/posts';
  public router = express.Router();
  private deps: PostsControllerDependencies;
 
  private posts: Post[] = [
    {
      author: 'Marcinnnq',
      content: 'Dolor sit amet',
      title: 'Lorem Ipsum',
    }
  ];
 
  constructor(deps: PostsControllerDependencies) {
    this.deps = deps;
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.getAllPosts);
    this.router.post(this.path, validationMiddleware(CreatePostDto), this.createAPost);
  }
 
  getAllPosts = (request: express.Request, response: express.Response) => {
    const name = this.deps.postsService.getName();
    response.send(name);
   // response.send(this.posts);
  }
 
  createAPost = (request: express.Request, response: express.Response) => {
    const post: Post = request.body;
    this.posts.push(post);
    response.send(`Post ${post.title} created successfully`);
  }
}
 
export default PostsController;