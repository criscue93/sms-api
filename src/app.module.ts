import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { Sms, SmsSchema } from './schemas/proyect.schema';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.APP_MONGO, {
      connectionName: 'sms',
    }),
    MongooseModule.forFeature(
      [
        {
          name: Sms.name,
          schema: SmsSchema,
        },
      ],
      'sms',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
