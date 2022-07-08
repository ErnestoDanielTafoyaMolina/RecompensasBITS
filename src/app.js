//dependences
import express from 'express';
import cors from "cors";
import morgan from "morgan";

import config from './config';

//import routes 
import usersRoutes   from './routes/users.routes';
import payrollRoutes from './routes/payroll.routes';
import productRoutes from './routes/products.routes';

const app = express();

//settings
app.set('port', config.port);

//Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes
app.use("/api",usersRoutes);
app.use("/api",payrollRoutes);
app.use("/api",productRoutes);

export default app;