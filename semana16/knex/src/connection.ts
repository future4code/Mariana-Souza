import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

const connection = knex({
   client: "mysql",
   connection: {
      host: "35.226.146.116",
      port: 3306,
      user: "mariana-carolina",
      password: "oTX!TpCP0xn8m!sX9LyD",
      database: "maryam-mariana-carolina",
      multipleStatements: true
   },
});

export default connection