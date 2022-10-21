import { ApiProperty } from '@nestjs/swagger';

class Item {
  @ApiProperty()
  product: string;
  @ApiProperty()
  quantity: number;
}

export class CreateOrderDto {
  @ApiProperty()
  cardId: string;
  @ApiProperty({ type: [Item] })
  items: Item[];
}
