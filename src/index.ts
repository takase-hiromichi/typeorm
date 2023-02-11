import { AppDataSource } from "./data-source";
import { Photo } from "./entity/Photo";
import { PhotoMetadata } from "./entity/PhotoMetadata";

AppDataSource.initialize()
  .then(async () => {
    console.log("start...");

    const photo = new Photo();
    photo.name = "my new photo...";
    photo.description = "my description...";
    photo.filename = "my photo name...";
    photo.views = 0;
    photo.isPublished = true;

    const photoMetadata = new PhotoMetadata();
    photoMetadata.width = 555;
    photoMetadata.height = 777;
    photoMetadata.compressed = true;
    photoMetadata.comment = "my comment...";
    photoMetadata.oriientation = "portrait";
    photoMetadata.photo = photo;

    const photoRepository = AppDataSource.getRepository(Photo);
    const photoMetadataRepository = AppDataSource.getRepository(PhotoMetadata);

    await photoRepository.save(photo);
    await photoMetadataRepository.save(photoMetadata);
  })
  .catch((error) => {
    console.log(error);
  });
