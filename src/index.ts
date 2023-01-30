import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

(async () => {
  await AppDataSource.initialize();

  const user = new User();

  user.firstName = "Satoh";
  user.lastName = "Kojiro";
  user.age = 23;
  await user.save();

  const allUsers = await User.find();
  const satoh = await User.findOneBy({
    firstName: "Satoh",
    lastName: "Kojiro",
  });

  console.log(allUsers);
  console.log(satoh);

  await satoh.remove();
})();
