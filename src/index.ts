import { AppDataSource } from "./data-source";
import { Photo } from "./entity/Photo";

AppDataSource.initialize()
  .then(async () => {
    console.log("start...");

    const photoRepository = AppDataSource.getRepository(Photo);

    const allPhotos = await photoRepository.find();
    console.log("allPhotos: ", allPhotos);

    const firstPhoto = await photoRepository.findOneBy({ id: 1 });
    console.log("firstPhoto: ", firstPhoto);

    const myPhotoPhoto = await photoRepository.findOneBy({ name: "my photo" });
    console.log("myPhotoPhoto: ", myPhotoPhoto);

    const allViewedPhotos = await photoRepository.findBy({ views: 1 });
    console.log("allViewedPhotos: ", allViewedPhotos);

    const allPublishedPhotos = await photoRepository.findBy({
      isPublished: true,
    });
    console.log("allPublishedPhotos: ", allPublishedPhotos);

    const [photos, photosCount] = await photoRepository.findAndCount();
    console.log("photos: ", photos);
    console.log("photosCount: ", photosCount);
  })
  .catch((error) => {
    console.log(error);
  });
