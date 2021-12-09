import {  Module } from '@nestjs/common';
import { enviroments } from './enviroment';
import { ConfigModule } from '@nestjs/config';
import config from './config';
import * as Joi from 'joi';
import { DatabaseModule } from './database/database.module';
import { ProductModule } from './products/product.module';





@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        API_KEY: Joi.number(),
        DATABASE_NAME: Joi.string(),
        DATABASE_PORT: Joi.number(),
      }),
    }),
    ProductModule,
    DatabaseModule,

  ]
})
export class AppModule {}
