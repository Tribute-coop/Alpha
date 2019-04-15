import { Request, Response, Application, NextFunction } from 'express';

import { routes } from './router';

// eslint-disable-next-line
const express = require('express');

// eslint-disable-next-line
const app: Application = express();

// Allow any method from any host and log requests
app.use((req: Request, res: Response, next: NextFunction): void => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    console.log(`${req.ip} ${req.method} ${req.url}`);
    next();
  }
});

// Handle POST requests that come in formatted as JSON
app.use(express.json());

app.use('/', routes);

// A default hello word route
app.get('/', (_: Request, res: Response): void => {
  res.send({ hello: 'world' });
});

// Start our server on port 4201
app.listen(4201, '127.0.0.1', function(): void {
  console.log('Server now listening on 4201');
});
