import { IsString } from 'class-validator';
import Post from './post.interface';
 
class CreatePostDto {
  constructor (post: Post) {
    this.author = post.author;
    this.content = post.content;
    this.title = post.title;
  }

  @IsString()
  author: string;
 
  @IsString()
  content: string;
 
  @IsString()
  title: string;
}
 
export default CreatePostDto;