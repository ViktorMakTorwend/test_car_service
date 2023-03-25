import { ApiProperty } from "@nestjs/swagger/dist";
import { Model, Table, Column, DataType, BelongsToMany } from "sequelize-typescript";
import { UserCars } from "src/users/user-cars.model";
import { User } from "src/users/users.model";


interface CarCreationAttr {
  marka: string;
  model: string;
  prod_year: string;
}

@Table({ tableName: 'cars' })
export class Car extends Model<Car, CarCreationAttr> {

  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({example: 'Lada', description: 'Марка авто'})
  @Column({ type: DataType.STRING, allowNull: false })
  marka: string;

  @ApiProperty({example: 'Granta', description: 'Модель авто'})
  @Column({ type: DataType.STRING, allowNull: false})
  model: string;
  
  @ApiProperty({example: '2020', description: 'Год выпуска авто'})
  @Column({ type: DataType.STRING, allowNull: false })
  prod_year: string;

  @BelongsToMany( () => User, () => UserCars )
  users: User[];

}
