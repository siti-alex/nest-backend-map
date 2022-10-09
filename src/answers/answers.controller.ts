import { Body, Controller, Post } from "@nestjs/common";
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
}
