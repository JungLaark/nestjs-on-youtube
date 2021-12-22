import { Controller } from '@nestjs/common';

@Controller('boards')
export class BoardsController {
    constructor(private boardService: BoardService) {}
}
