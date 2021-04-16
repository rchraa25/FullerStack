import { registerAs } from '@nestjs/config';
import { environment } from '../environments/environment'

export const appConfiguration = registerAs('appConfiguration', () => ({
  ...environment,
  // add anything you want here, to make it available to all nestjs libs
  // via ConfigService
  // env: process.env.APP_ENV,
  // name: process.env.APP_NAME,
  // url: process.env.APP_URL,
  // port: process.env.APP_PORT,
}));