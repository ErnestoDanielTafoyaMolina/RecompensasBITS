import { config } from "dotenv"
//gracias a dotenv podemos usar variables de entorno en la aplicación
config();
//las variables vienen de un archivo externos
export default {
    port: process.env.PORT || 3001,
    dbUser: process.env.DB_USER || "",
    dbPassword: process.env.DB_PASSWORD || "",
    dbServer: process.env.DB_SERVER || "",
    dbPort: process.env.DB_PORT || 65535,
    dbDatabase: process.env.DB_DATABASE || "",
}