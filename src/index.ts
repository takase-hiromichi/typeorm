import { AppDataSource } from "./data-source";
import { Photo } from "./entity/Photo";

AppDataSource.initialize()
  .then(() => {
    console.log("start...");

    const photo = new Photo();

    photo.name = "my photo";
    photo.description = "my description";
    photo.filename = "photo.jpg";
    photo.views = 1;
    photo.isPublished = true;

    AppDataSource.manager.save(photo);
  })
  .catch((error) => {
    console.log(error);
  });
