import { LoggerService } from '@nestjs/common';

export class MyLogger implements LoggerService {
  /**
   * Write a 'log' level log.
   */
  log(message: any) {
    console.log(message);
  }

  /**
   * Write an 'error' level log.
   */
  error(message: any) {
    console.error(message);
  }

  /**
   * Write a 'warn' level log.
   */
  warn(message: any) {
    console.warn(message);
  }

  /**
   * Write a 'debug' level log.
   */
  debug(message: any) {
    console.debug(message);
  }
}
