import { IsIn, IsNumber, IsString, Max, Min } from "class-validator";
import { CITIES } from "../constants";
import type { City } from "../constants";

export class CatDTO {
  @IsString()
  name: string;

  @IsNumber()
  @Min(1)
  @Max(99)
  age: number;

  @IsIn(CITIES)
  comeFrom: City;
}
