import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';

@Module({
    controllers: [BoardsController],
    providers: [BoardsService],
    //provider->Services, Repository, Factory, Helper
})
export class BoardsModule {}
