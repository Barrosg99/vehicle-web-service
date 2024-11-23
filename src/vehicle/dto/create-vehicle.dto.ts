import { Field, InputType } from '@nestjs/graphql';
import { PaymentMethodType } from '../models/vehicle.model';

@InputType()
export class CreateVehicleDto {
  @Field()
  readonly name: string;

  @Field()
  readonly licensePlate: string;

  @Field()
  readonly userId?: string;

  @Field()
  readonly paymentMethod: PaymentMethodType;
}
