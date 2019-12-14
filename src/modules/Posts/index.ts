import PostsController from "./posts.controller";
import PostsService from "./posts.service";

interface PostsControllerDependencies {
  postsService: PostsService,
};

const postsService = new PostsService();

const postsController = new PostsController({
    postsService,
});

export {
    postsController,
    postsService,
    PostsService,
    PostsControllerDependencies,
};