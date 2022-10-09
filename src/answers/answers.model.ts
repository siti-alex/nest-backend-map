import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Point } from "../points/points.model";

interface AnswerCreationAttrs {
  pointId: number;
  availabitityRating: number;
  visualRating: number;
  fillRating: number;
  safetyRating: number;
  ecologyRating: number;
}

@Table({tableName: 'answers'})
export class Answer extends Model<Answer>{

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.INTEGER, unique: false})
    availabitityRating: number;

    @Column({type: DataType.INTEGER, unique: false})
    visualRating: number;

    @Column({type: DataType.INTEGER, unique: false})
    fillRating: number;

    @Column({type: DataType.INTEGER, unique: false})
    safetyRating: number;

    @Column({type: DataType.INTEGER, unique: false})
    ecologyRating: number;

    @Column({type: DataType.STRING, unique: false, allowNull: true})
    addition: string;

    @ForeignKey(() => Point)
    @Column({type: DataType.INTEGER})
    pointId: number;

    @BelongsTo(() => Point)
    point: Point
}
