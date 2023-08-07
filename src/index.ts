import { CITY } from "./constants";
import { catService } from "./cat/cat.service";
import type { CatDTO } from "./cat/cat.dto";

const externalFakeAPI = () =>
  ({
    name: "Goni",
    age: 13,
    comeFrom: CITY.London,
  }) as unknown;
const parseCatDTOFake = (data: unknown) => data as CatDTO;

const run = () => {
  // incomming
  const unknownData = externalFakeAPI();
  const catDTO = parseCatDTOFake(unknownData);

  // domain
  const cat = catService.convertToCat(catDTO);
  console.log(cat.sayHello());

  // outgoing
  const persistantCatDTO = catService.convertToPersistantCatDTO(cat);
  console.log("Cat in database", persistantCatDTO);
};

run();
