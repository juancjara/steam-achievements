import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';

const server: express.Application = express();

server.use(helmet());
server.use(
  cors({
    //credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);

server.use(bodyParser.json());
server.use(morgan('tiny'));

export default server;
