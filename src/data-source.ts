import "reflect-metadata";
import { DataSource } from "typeorm";
import { Photo } from "./entity/Photo";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "test",
  password: "test",
  database: "test",
  synchronize: true,
  logging: true,
  entities: [Photo],
  migrations: [],
  subscribers: [],
});
