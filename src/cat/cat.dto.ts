import { IsIn, IsNumber, IsString, Max, Min } from "class-validator";
import { CITIES } from "../constants";
import { Validatable } from "../validatable";
import type { City } from "../constants";

export class CatDTO extends Validatable {
  @IsString()
  name: string;

  @IsNumber()
  @Min(1)
  @Max(99)
  age: number;

  @IsIn(CITIES)
  comeFrom: City;

  constructor(name: string, age: number, comeFrom: City) {
    super();

    this.name = name;
    this.age = age;
    this.comeFrom = comeFrom;
    this.validate();
  }
}
