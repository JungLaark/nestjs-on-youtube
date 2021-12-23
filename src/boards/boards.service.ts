import { CreateBoardDto } from './dto/create-board.dto';
import { Delete, Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';

@Injectable()
export class BoardsService {
    //다른 컴포넌트에서의 수정 방지 위함
    private boards: Board[] = [];

    //:Board[] 리턴값의 자료형 정의
    //모든 Board return;
    getAllBoard(): Board[] {
        return this.boards;
    }

    //Board 생성
    createBoard(createBoardDto: CreateBoardDto) {
        const { title, description } = createBoardDto;

        const board: Board = {
            id: uuid(),
            title: title,
            description: description,
            status: BoardStatus.PUBLIC,
        };

        //배열에 추가
        this.boards.push(board);

        return board;
    }

    //ID 로 Board 검색
    getBoardById(id: string): Board {
        return this.boards.find((board) => board.id === id);
    }

    //ID 로 삭제
    deleteBoard(id: string): void {
        this.boards = this.boards.filter((board) => board.id !== id);
    }

    //Board update
    //상태만 업데이트 update
    updateBoardStatus(id: string, status: BoardStatus): Board {
        const board = this.getBoardById(id);
        board.status = status;

        return board;
    }
}
