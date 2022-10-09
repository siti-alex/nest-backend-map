import { Module } from '@nestjs/common';
import { PointsService } from './points.service';
import { PointsController } from "./points.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Point } from "./points.model";
import { Answer } from "../answers/answers.model";

@Module({
  controllers: [PointsController],
  providers: [PointsService],
  imports: [
    SequelizeModule.forFeature([Point, Answer])
  ],
  exports: [PointsService],
})
export class PointsModule {}
