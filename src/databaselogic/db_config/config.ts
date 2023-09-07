import { DataSource } from "typeorm";
import { Book } from "../db_entity/Book";
import { User } from "../db_entity/User";
import { subscriptionHistory } from "../db_entity/subscriptionHistory";
import { CONSTANTS } from "../../mapper/constants";
import { Author } from "../db_entity/author";
import { Languages } from "../db_entity/language";
import { Category } from "../db_entity/category";

//CONFIG
export const appDatasource = new DataSource({
    type: 'postgres',
    host: CONSTANTS.DB_HOST,
    port: Number(CONSTANTS.DB_PORT),
    username: CONSTANTS.DB_USERNAME,
    password: String(CONSTANTS.DB_PASSWORD),
    database: CONSTANTS.DB_NAME,
    entities: [User,Book,subscriptionHistory,Author,Languages,Category],
    extra: { max: 5, connectionTimeoutMillis: 10000 },
    synchronize: true,
})