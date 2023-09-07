import * as dotenv from 'dotenv';
dotenv.config();


export const CONSTANTS = {
    // DB CONSTANTS
    DB_NAME: process.env.DB,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_PORT: process.env.DB_PORT,
    DB_HOST: process.env.DB_HOST,
    DB_TYPE: process.env.DB_TYPE,

    MAIL_USER: process.env.MAIL_USER,
    MAIL_PASSWORD: process.env.MAIL_PASSWORD,
    
    JWT_SECURITY_KEY: process.env.JWT_SECURITY_KEY,
    REFRESH_SECURITY_KEY: process.env.REFRESH_SECURITY_KEY
}