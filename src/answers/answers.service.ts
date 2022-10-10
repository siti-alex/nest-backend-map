import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Answer } from "./answers.model";
import { CreateAnswerDto } from "./dto/create-answer.dto";
import { PointsService } from "../points/points.service";

@Injectable()
export class AnswersService {
  constructor(@InjectModel(Answer) private answerRepository: typeof Answer,
              private pointService: PointsService) {
  }

  async create(dto: CreateAnswerDto){
      const answer = await this.answerRepository.create(dto);
      return answer;
  }

  async getAll(){
    const answer = await this.answerRepository.findAll();
    return answer;
  }

  async getAnswersByIdPoint(pointId: number){
    const answers = await this.answerRepository.findAll({where: {pointId}})
    if(answers.length>0) return answers;
    else throw new HttpException('Точка не найдена', HttpStatus.NOT_FOUND);
  }


}
