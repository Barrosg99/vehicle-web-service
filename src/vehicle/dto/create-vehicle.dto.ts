import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateVehicleDto {
  @Field()
  readonly name: string;

  @Field()
  readonly licensePlate: string;

  @Field()
  readonly userId?: string;
}
