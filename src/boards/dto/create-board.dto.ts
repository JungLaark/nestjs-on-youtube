/*파이프 같은 기능이 용이하기에 class 로 정의
게시물 생성을 위한 DTO*/

import { IsNotEmpty } from 'class-validator';

export class CreateBoardDto {
    @IsNotEmpty()
    title: string;
    @IsNotEmpty()
    description: string;
}
