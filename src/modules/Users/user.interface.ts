import Post from 'modules/Posts/post.interface';

interface User {
    id: number;
    name: string;
    posts: Post[];
  }
   
  export default User;