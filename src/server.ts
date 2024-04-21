require('dotenv').config();
import 'module-alias/register';
import express from 'express';
import bodyParser from 'body-parser';
import qs from 'qs';

import * as swaggerRouter from './swagger/swagger-router';
import errorHandler from './middlewares/error-handling-middleware';

const startBot = () => {
  const app = express();
  const port = process.env.PORT;
  // Allow comma format for array query parameters (?a=b,c,d)
  app.set('query parser', (str) => {
    return qs.parse(str, { comma: true });
  });
  
  app.use(bodyParser.json());
  
  swaggerRouter.defineRoutes(app);
  
  app.use(errorHandler);
  
  app.get('/', (_, res) => {
      res.send('Hello World!');
  });
  
  app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
  });
};

startBot();
