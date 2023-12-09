import { UpdateSaleDto } from '../sale/update-sale.dto';

export interface CreateClientDto extends UpdateSaleDto {
  nationalId: string;
}
