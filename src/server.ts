import App from './app';
import { postsController } from './modules/Posts';
import { usersController } from './modules/Users';

// import UsersController from './modules/Users/users.controller';
 
const app = new App(
  [
    postsController,
    usersController,
  ],
  5000,
);
 
app.listen();