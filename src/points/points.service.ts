import { Injectable } from '@nestjs/common';
import { Point } from "./points.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreatePointDto } from "./dto/create-point.dto";



@Injectable()
export class PointsService {

    constructor(@InjectModel(Point) private pointRepository: typeof Point) {}

    async createPoint(dto: CreatePointDto){
        const point = await this.pointRepository.create(dto);
        return point;
    }

    async getAllPoints(){
        const points = await this.pointRepository.findAll();
        return points;
    }

    async getById(id: number){
        const point = await this.pointRepository.findByPk(id);
        return point;
    }
}
