import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Answer } from "../answers/answers.model";

interface PointCreationAttrs {
  title: string,
  coordX: number,
  coordY: number,
  }

@Table({tableName: 'points'})
export class Point extends Model<Point>{

  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, unique: false})
  title: string;

  @Column({type: DataType.DOUBLE, unique: false})
  coordX: number;

  @Column({type: DataType.DOUBLE, unique: false})
  coordY: number;

  @Column({type: DataType.STRING, unique: false, allowNull: true})
  description: string;

  @Column({type: DataType.STRING, unique: false,  allowNull: true})
  img: string;

  @HasMany(() => Answer)
  answers: Answer[];
}
