import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DateTime } from 'luxon';
import { Model } from 'mongoose';
import { smsDTO } from './dto/sms.dto';
import { IResponse } from './interfaces/IResponse';
import { Sms, SmsDocument } from './schemas/proyect.schema';
import * as clientTwilio from 'twilio';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Sms.name, 'sms')
    private smsDocument: Model<SmsDocument>,
  ) {}

  getPing(): IResponse {
    return {
      error: false,
      message:
        'Bienvenido a SMS - API, basado ​​en principios REST, devuelve metadatos JSON - Copyright © Ing. Cristian Cueto Vargas',
      response: {
        nameApp: 'SMS - API',
        version: '0.0.1',
        dateTimeServer: DateTime.now().toISO(),
      },
      status: 200,
    };
  }

  async sendMessage(data: smsDTO): Promise<IResponse> {
    const response: IResponse = {
      error: true,
      message: 'Existen problemas con el servicio de sendMessage',
      response: {},
      status: 422,
    };

    try {
      const accountSid = process.env.ACCOUNT_SID;
      const authToken = process.env.AUTH_TOKEN;
      const client = clientTwilio(accountSid, authToken);
      const send = await client.messages.create({
        body: `${data.mensaje}`,
        from: process.env.FROM_SEND,
        to: `${data.numero}`,
      });

      if (send) {
        response.error = false;
        response.message = 'Se logró enviar el sms correctamente';
        response.response = send['from'];
        response.status = 200;
      }
    } catch (error) {
      response.response = error;
      response.status = 500;
    }

    return response;
  }

  async saveLogs(data: any): Promise<IResponse> {
    const response: IResponse = {
      error: true,
      message: 'Existe problemas con el servicio saveLogs.',
      response: {},
      status: 422,
    };

    try {
      const log = new this.smsDocument(data);
      await log.save();

      response.error = false;
      response.message = 'Se registraron los logs correctamente';
      response.response = {};
      response.status = 200;
    } catch (error) {
      response.response = error;
      response.status = 500;
    }

    return response;
  }
}
