import { ApiProperty } from '@nestjs/swagger';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Order } from 'src/order/schemata/order.schema';
import * as mongoose from 'mongoose';

export type CardDocument = Card & Document;

@Schema({ timestamps: true })
export class Card {
  @ApiProperty({
    type: String,
    format: 'uuid',
  })
  _id: string;

  @ApiProperty()
  @Prop()
  cardId: string;

  @ApiProperty()
  @Prop()
  currentBalance: number;

  @ApiProperty()
  @Prop()
  isU18: boolean;

  @ApiProperty()
  @Prop()
  isErstie: boolean;

  @ApiProperty()
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }] })
  orders: Order[];

  @Prop()
  @ApiProperty()
  createdAt: Date;

  @Prop()
  @ApiProperty()
  updatedAt: Date;
}

export const CardSchema = SchemaFactory.createForClass(Card);
