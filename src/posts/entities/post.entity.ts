import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn({
    comment: 'The posts unique identifier',
  })
  id: number;

  @Column()
  userId: number;

  @Column()
  title: string;

  @Column()
  body: string;
}
