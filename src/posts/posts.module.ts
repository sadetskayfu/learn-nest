import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FilesModule } from 'src/files/files.module';
import { User } from 'src/users/users.model';
import { Post } from './post.model';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
    controllers: [PostsController],
    providers: [PostsService],
    imports: [
        SequelizeModule.forFeature([Post, User]),
        FilesModule
    ],
})
export class PostsModule { }
