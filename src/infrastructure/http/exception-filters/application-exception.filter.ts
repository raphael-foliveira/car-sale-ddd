import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Request, Response } from 'express';
import {
  ApplicationError,
  NotFoundError,
} from '../../../application/errors/base.errors';

@Catch(ApplicationError)
export class ApplicationExceptionFilter implements ExceptionFilter {
  catch(exception: ApplicationError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    let status = 500;
    if (exception instanceof NotFoundError) {
      status = 404;
    }
    response.status(status).json({
      statusCode: status,
      message: exception.message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
