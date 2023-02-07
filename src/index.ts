import { AppDataSource } from "./data-source";
import { Photo } from "./entity/Photo";

AppDataSource.initialize()
  .then(async () => {
    console.log("start...");

    const photoRepository = AppDataSource.getRepository(Photo);

    const photo = await photoRepository.findOneBy({
      id: 1,
    });

    console.log("before photo: ", photo);

    await photoRepository.remove(photo);

    console.log("after photo: ", photo);
  })
  .catch((error) => {
    console.log(error);
  });
