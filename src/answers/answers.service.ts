import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Answer } from "./answers.model";
import { CreateAnswerDto } from "./dto/create-answer.dto";

@Injectable()
export class AnswersService {
  constructor(@InjectModel(Answer) private answerRepository: typeof Answer) {
  }

  async create(dto: CreateAnswerDto){
      const answer = await this.answerRepository.create(dto);
      return answer;
  }
}
