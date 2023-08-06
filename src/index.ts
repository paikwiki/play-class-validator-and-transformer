import { CatDTO } from "./cat/cat.dto";
import { Cat } from "./cat/cat.model";
import { CITY } from "./constants";

const run = () => {
  // 🟢 Valid
  const catDTO1 = new CatDTO("Goni", 13, CITY.London);
  console.log(catDTO1);

  const cat1 = new Cat("Goni", 13, CITY.London, "abcdefghijabcdefghij", 0, 0);
  console.log(cat1);

  // ❌ Invalid
  const catDTO2 = new CatDTO("Goni", -1, CITY.London);
  console.log(catDTO2);

  const cat2 = new Cat(
    "Goni",
    -1,
    CITY.London,
    "abcdefghijabcdefghijabcde",
    0,
    0,
  );
  console.log(cat2);
};

run();
