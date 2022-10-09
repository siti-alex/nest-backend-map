import { Module } from '@nestjs/common';
import { AnswersController } from './answers.controller';
import { AnswersService } from './answers.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { Point } from "../points/points.model";
import { Answer } from "./answers.model";
import { PointsService } from "../points/points.service";

@Module({
  controllers: [AnswersController],
  providers: [AnswersService],
  imports: [
    SequelizeModule.forFeature([Point, Answer])
  ],
  exports: [AnswersService],
})
export class AnswersModule {}
