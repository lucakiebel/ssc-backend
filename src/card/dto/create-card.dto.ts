import { ApiProperty } from '@nestjs/swagger';

export class CreateCardDto {
  @ApiProperty()
  cardId: string;
  @ApiProperty()
  balance: number;
  @ApiProperty()
  isU18: boolean;
  @ApiProperty()
  isErstie: boolean;
}
