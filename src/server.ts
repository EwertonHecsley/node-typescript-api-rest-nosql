import 'dotenv/config';
import app from "./app"
import { connectDataBase } from './database/connection.mongo';

const port = process.env.PORT || 3333;

connectDataBase();

app.listen(port, () => console.log(`Server is running port ${port}`));