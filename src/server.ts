import cors from 'cors';
import Express from 'express';
import { configDotenv } from 'dotenv';

import connectDB from './backend/config/db';

const app = Express();

app.use(cors());
configDotenv();

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
