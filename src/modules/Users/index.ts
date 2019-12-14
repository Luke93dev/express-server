import UsersController from "./users.controller";
import { PostsService } from '../Posts';

interface IUsersControllerDependencies {
  postsService: PostsService,
};

const postsService = new PostsService();

const usersController = new UsersController({
  postsService,
});

export {
  usersController,
  IUsersControllerDependencies,
};