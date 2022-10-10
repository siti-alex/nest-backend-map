import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { PointsService } from "./points.service";
import { CreatePointDto } from "./dto/create-point.dto";

@Controller('points')
export class PointsController {

  constructor(private pointService: PointsService) {
  }

  @Get('/GetAllPoints')
  getPoints(){
    return this.pointService.getAllPoints();
  }

  @Post()
  create(@Body() pointDto: CreatePointDto){
    return this.pointService.createPoint(pointDto);
  }

  @Get(':id')
  getPointById(@Param('id') id: number){
    return this.pointService.getById(id);
  }
}
