import { config } from "dotenv"

config();

export default {
    port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER || "",
    dbPassword: process.env.DB_PASSWORD || "",
    dbServer: process.env.DB_SERVER || "",
    dbPort: process.env.DB_PORT || 65535,
    dbDatabase: process.env.DB_DATABASE || "",
}