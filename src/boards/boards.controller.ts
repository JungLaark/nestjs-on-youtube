import { Body, Controller, Get, Post } from '@nestjs/common';
import { Board } from './board.model';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService) {}

    //경로가 생략되어있으면 "/"" 이다.
    @Get()
    getAllBoard(): Board[] {
        return this.boardsService.getAllBoard();
    }

    @Post()
    createBoard(@Body('title') title: string, @Body('description') description: string): Board {
        return this.boardsService.createBoard(title, description);
    }
}
