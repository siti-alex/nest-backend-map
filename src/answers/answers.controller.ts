import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateAnswerDto } from "./dto/create-answer.dto";
import { AnswersService } from "./answers.service";

@Controller('answers')
export class AnswersController {
  constructor(private answerService: AnswersService) {
  }

  @Post()
  sendAnswer(@Body() dto: CreateAnswerDto){
      return this.answerService.create(dto);
  }

  @Get()
  getAllAnswers(){
    return this.answerService.getAll();
  }

  @Get('getAnswersById/:id')
  getAnswersByIdPoint(@Param('id') id: number){
    return this.answerService.getAnswersByIdPoint(id);
  }
}
