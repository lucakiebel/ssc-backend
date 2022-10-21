import { ApiProperty } from '@nestjs/swagger';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as mS } from 'mongoose';
import { Product } from 'src/product/schemata/product.schema';
import { Card } from 'src/card/schemata/card.schema';

export type OrderDocument = Order & Document;

export class OrderItem {
  @ApiProperty()
  @Prop({ type: mS.Types.ObjectId, ref: 'Product' })
  product: Product;

  @ApiProperty()
  @Prop()
  quantity: number;
}

@Schema({ timestamps: true })
export class Order {
  @ApiProperty({
    type: String,
    format: 'uuid',
  })
  _id: string;

  @ApiProperty()
  @Prop({ type: mS.Types.ObjectId, ref: 'Card' })
  card: Card;

  @ApiProperty()
  @Prop()
  items: OrderItem[];

  @Prop()
  @ApiProperty()
  createdAt: Date;

  @Prop()
  @ApiProperty()
  updatedAt: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
