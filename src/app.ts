import express from 'express';
import 'express-async-errors';
import router from './routes';
import { httpErrorExecption } from './middleware/http.error.middleware';
const app = express();

app.use(express.json());

app.use(router);

app.use(httpErrorExecption);

export default app;
