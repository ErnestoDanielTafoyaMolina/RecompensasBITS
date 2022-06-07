import express from 'express';
import config from './config';

//routes
import usersRoutes   from './routes/users.routes';
// import payrollRoutes from './routes/payroll.routes';
 import productRoutes from './routes/products.routes';

const app = express();

//settings
app.set('port', config.port);

app.use(usersRoutes);
// app.use(payrollRoutes);
 app.use(productRoutes);

export default app;