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
  @Length(20, 20)
  id: string;

  @IsNumber()
  createdAt: number;

  @IsNumber()
  updatedAt: number;

  sayHello() {
    return `Hi, my name is ${this.name}. I'm ${this.age} years old and come from ${this.comeFrom}!`;
  }
}
