import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product {
  @ApiProperty({
    type: String,
    format: 'uuid',
  })
  _id: string;
  @ApiProperty()
  @Prop()
  name: string;

  @ApiProperty()
  @Prop()
  price: number;

  @ApiPropertyOptional()
  @Prop({ default: null })
  image?: string;

  @Prop()
  @ApiProperty()
  createdAt: Date;

  @Prop()
  @ApiProperty()
  updatedAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
