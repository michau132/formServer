import { Catch, NotFoundException, ExceptionFilter, ArgumentsHost } from "@nestjs/common";

@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter {
    catch(exception: NotFoundException, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse();
      
      if(!exception.message.includes('/dist')) {
        console.log('tu')
        response.redirect('/');
      }
      console.log('ide')
    }
}