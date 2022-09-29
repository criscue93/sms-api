import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SmsDocument = Sms & Document;

@Schema()
export class Sms {
  @Prop({ type: Date, default: Date.now() })
  createdAt: Date;

  @Prop({ type: Object })
  origen: any;

  @Prop({ type: Object })
  destino: any;

  @Prop({ type: Boolean })
  enviado: boolean;
}

export const SmsSchema = SchemaFactory.createForClass(Sms);
