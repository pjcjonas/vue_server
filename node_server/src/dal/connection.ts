import { Sequelize } from "sequelize";
import mysql2 from "mysql2";
import dotenv from "dotenv";
dotenv.config();

export const connect = (): Sequelize => {
  const sequelize = new Sequelize(
    process.env.DB_DATABASE || "",
    process.env.DB_USERNAME || "",
    process.env.DB_PASSWORD || "",
    {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT) || 3306,
      dialect: "mysql"
    }
  );
  return sequelize;
};
