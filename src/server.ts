/**
 * Setup express server.
 */
import mongoose from 'mongoose';
import morgan from 'morgan';
import helmet from 'helmet';
import express, { Request, Response, NextFunction } from 'express';

import 'express-async-errors';

import BaseRouter from './controllers/api.controller';
import Paths from './constants/paths';

import env from './env';
import HttpStatusCodes from './constants/http';

import { NodeEnvs } from './constants/env';
import { RouteError } from './utils/errors';
import { UnauthorizedError } from 'express-jwt';


const cors = require("cors");
const corsOptions = {
  origin: ["http://localhost:5173"],
};

const app = express();
app.use(cors(corsOptions));
//const axios = require('axios');
const { readFileSync } = require('fs');



app.set('view engine', 'pug');
app.set('views', './views');

app.get('/accounts',async (req,res) => {
  //const query = await axios.get('http://localhost:3001');
  const data = readFileSync('./src/db/Account.json');
  console.log(JSON.parse(data));
  
  res.render('account', { accounts: JSON.parse(data) });
});

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

// Show routes called in console during development
if (env.NODE_ENV === NodeEnvs.Dev) {
  app.use(morgan('dev'));
}

// Security
if (env.NODE_ENV === NodeEnvs.Production) {
  app.use(helmet());
}
//connect to mongo

mongoose
        .connect(env.MONGO_URL,{retryWrites: true, w:'majority'})
        .then(() => {
          console.debug('connected to MongoDB.')
        })
        .catch((error) => {
         console.error(error)
        });

// Add APIs, must be after middleware
app.use(Paths.Base, BaseRouter);

// Add error handler
app.use((err: Error, _: Request, res: Response, next: NextFunction) => {
  if (env.NODE_ENV !== NodeEnvs.Test) {
    console.error(err, true);
  }
  let status = HttpStatusCodes.BAD_REQUEST;
  if (err instanceof RouteError || err instanceof UnauthorizedError) {
    status = err.status;
  }
  return res.status(status).json({ error: err.message });
});

export default app;
