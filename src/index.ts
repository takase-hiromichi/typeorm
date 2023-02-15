import { AppDataSource } from "./data-source";
import { Photo } from "./entity/Photo";

AppDataSource.initialize()
  .then(async () => {
    console.log("start...");

    const photoRepository = AppDataSource.getRepository(Photo);
    const photos = await photoRepository.find({
      where: [
        {
          id: 6,
        },
        {
          id: 7,
        },
      ],
    });
    console.log("photos", photos);
  })
  .catch((error) => {
    console.log(error);
  });
