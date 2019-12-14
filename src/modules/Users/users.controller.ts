import express from 'express';
import { boundMethod } from 'autobind-decorator'

import User from './user.interface';

import { IUsersControllerDependencies } from "./index";
 
class UsersController {
  public path = '/users';
  public router = express.Router();
  private deps: IUsersControllerDependencies;

  private users: User[] = [
    {
      id: 0,
      name: 'JAnusz',
      posts: [
        {
          author: 'Marcinnnq',
          content: 'Dolor sit amet',
          title: 'Lorem Ipsum',
        }
      ],
    }
  ];
 
  constructor(deps: IUsersControllerDependencies) {
    this.deps = deps;
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.getAllUsers);
  //  this.router.post(this.path, this.createAPost);
  }
 
  @boundMethod
  getAllUsers (request: express.Request, response: express.Response) {
    response.send(this.users);
  }
 
  // createAPost = (request: express.Request, response: express.Response) => {
  //   const post: Post = request.body;
  //   this.posts.push(post);
  //   response.send(post);
  // }
}
 
export default UsersController;