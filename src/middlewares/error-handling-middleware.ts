import { NextFunction, Response, Request } from 'express';
import { getLogger } from '@utils/logger';
import { Error } from '@ctypes/error';

const logger = getLogger();

const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const httpStatusCode = err.status || res.statusCode || 500;

  let formattedError: Error;

  if (Array.isArray(err.errors)) {
    formattedError = {
      message: err.message,
      errors: err.errors
    };
  } else {
    formattedError = {
      message: err.message,
      details: err.details
    };
  }

  const formattedErrorWithStack = {
    ...formattedError,
    stack: (err.stack || '').split('\n')
  };

  const errorBody = process.env.NODE_ENV === 'development' ? formattedErrorWithStack : formattedError;
  const loggedError = err.isAxiosError ? err.toJSON() : err;
  logger.error(loggedError);

  return res.status(httpStatusCode).send(errorBody);
};

export default errorHandler;
