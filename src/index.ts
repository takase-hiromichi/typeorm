import { AppDataSource } from "./data-source";
import { Photo } from "./entity/Photo";

AppDataSource.initialize()
  .then(async () => {
    console.log("start...");
  })
  .catch((error) => {
    console.log(error);
  });
