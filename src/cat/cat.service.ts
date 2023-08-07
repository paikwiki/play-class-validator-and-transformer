import { instanceToPlain, plainToClass } from "class-transformer";
import { Cat } from "./cat.model";
import type { CatDTO } from "./cat.dto";

class CatService {
  convertToCat(catDTO: CatDTO) {
    const now = Date.now();
    const properties = {
      ...catDTO,
      // id: "NEW_ID_ABCDE", // Wrong ID
      id: "NEW_ID_ABCDEFGHIJKLM",
      createdAt: now,
      updatedAt: now,
    };
    const cat = plainToClass(Cat, properties);
    // call validate method 🤪
    cat.validate();

    return cat;
  }
  convertToPersistantCatDTO(cat: Cat) {
    instanceToPlain(cat);
  }
}

export const catService = new CatService();
