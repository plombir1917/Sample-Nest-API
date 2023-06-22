import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  id: number;

  @IsNumber()
  userId: number;

  @IsString()
  title: string;

  @IsString()
  body: string;
}
