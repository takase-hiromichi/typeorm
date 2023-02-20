import { AppDataSource } from "./data-source";
import { Photo } from "./entity/Photo";
import { PhotoMetadata } from "./entity/PhotoMetadata";

AppDataSource.initialize()
  .then(async () => {
    console.log("start...");

    const photo = new Photo();
    photo.name = "photo name";
    photo.description = "photo description";
    photo.filename = "sample_photo.jpg";
    photo.views = 0;
    photo.isPublished = true;

    const metadata = new PhotoMetadata();
    metadata.height = 1000;
    metadata.width = 500;
    metadata.compressed = true;
    metadata.comment = "yeah";
    metadata.orientation = "oriented";

    photo.metadata = metadata;

    const photoRepository = AppDataSource.getRepository(Photo);

    const result = await photoRepository.save(photo);
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
