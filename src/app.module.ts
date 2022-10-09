import { Module } from '@nestjs/common';
import { PointsController } from './points/points.controller';
import { PointsModule } from './points/points.module';
import { PointsService } from "./points/points.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { ConfigModule } from "@nestjs/config";
import { Point } from "./points/points.model";
import { AnswersModule } from './answers/answers.module';
import { Answer } from "./answers/answers.model";

@Module({
  controllers: [PointsController],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'properties.env'
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Point, Answer],
      autoLoadModels: true
    }),
    PointsModule,
    AnswersModule
  ],
})
export class AppModule {}
