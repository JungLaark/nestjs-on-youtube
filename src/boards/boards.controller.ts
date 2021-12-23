import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService) {}

    //경로가 생략되어있으면 "/"" 이다.
    //전체 Board 가지고 오기
    @Get()
    getAllBoard(): Board[] {
        return this.boardsService.getAllBoard();
    }

    //Board 추가
    @Post()
    createBoard(@Body() createBoardDto: CreateBoardDto) {
        return this.boardsService.createBoard(createBoardDto);
    }

    //localhost:3000?id=test&name=test
    //param이 여러개인 경우 -> findOne(@Param() params: string[])
    //게시물 하나 리턴
    @Get('/:id')
    getBoardById(@Param('id') id: string): Board {
        return this.boardsService.getBoardById(id);
    }

    //게시물 하나 삭제
    //parameter 와 return 형의 자료형 구분
    @Delete('/:id')
    deleteBoard(@Param('id') id: string): void {
        this.boardsService.deleteBoard(id);
    }

    //Board Status 업데이트
    @Patch('/:id/status')
    updateBoardStatus(@Param('id') id: string, @Body('status') status: BoardStatus): Boards {
        this.boardsService.updateBoardStatus(id, status);
    }
}
