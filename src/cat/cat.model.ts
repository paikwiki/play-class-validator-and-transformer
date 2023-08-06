import { IsIn, IsNumber, IsString, Length, Max, Min } from "class-validator";
import { CITIES } from "../constants";
import { Validatable } from "../validatable";
import type { City } from "../constants";

export class Cat extends Validatable {
  @IsString()
  name: string;

  @IsNumber()
  @Min(1)
  @Max(99)
  age: number;

  @IsIn(CITIES)
  comeFrom: City;

  @IsString()
  @Length(20)
  id: string;

  @IsNumber()
  createdAt: number;

  @IsNumber()
  updatedAt: number;

  constructor(
    name: string,
    age: number,
    comeFrom: City,
    id: string,
    createdAt: number,
    updatedAt: number,
  ) {
    super();

    this.name = name;
    this.age = age;
    this.comeFrom = comeFrom;
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.validate();
  }
}
