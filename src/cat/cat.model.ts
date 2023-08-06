import { IsIn, IsNumber, IsString, Length, Max, Min } from "class-validator";
import { CITIES } from "../constants";
import type { City } from "../constants";

export class Cat {
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
}
