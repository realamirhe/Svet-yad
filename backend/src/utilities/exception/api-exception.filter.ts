import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common'
import { ApiException } from './api-exception'

@Catch(ApiException)
export class ApiExceptionsFilter implements ExceptionFilter {
  catch(exception: ApiException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()

    response.status(HttpStatus.OK).json({
      error: exception.getErrorCode(),
    })
  }
}
