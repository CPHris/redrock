// We need router, models, controllers, mongoose schemas, database 

import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import compression from 'compression'

dotenv.config();

// caching

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(compression())
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Your exp-tsc server says hello and sends 🌈 :)')
})

app.listen(port, () => {
  console.log(`Find server and 🌈 at http://localhost:${port}`)
})
