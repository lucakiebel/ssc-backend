import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardModule } from './card/card.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { MongooseModule } from '@nestjs/mongoose';

const mongoOptions = {
  user: process.env.MONGO_USER || '',
  pass: process.env.MONGO_PASS || '',
  dbName: process.env.MONGO_DB || 'test',
};

@Module({
  imports: [
    CardModule,
    ProductModule,
    OrderModule,
    MongooseModule.forRoot(process.env.MONGO_URL, mongoOptions),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
