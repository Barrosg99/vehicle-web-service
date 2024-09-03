import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ timestamps: true })
@ObjectType()
export class Vehicle {
  @Field(() => ID)
  id: string;

  @Field()
  @Prop({ required: true })
  name: string;

  @Field()
  @Prop({ required: true })
  brand: string;

  @Field()
  @Prop({ required: true })
  model: string;

  @Field()
  @Prop({ required: true })
  year: number;

  @Field()
  @Prop({ required: true })
  yearModel: number;

  @Field()
  @Prop({ required: true })
  capacity: number;

  @Field()
  @Prop({ required: true })
  imported: boolean;

  @Field()
  @Prop({ required: true })
  licensePlate: string;

  @Field(() => ID)
  @Prop({ required: true })
  userId: string;
}

export type UserDocument = HydratedDocument<Vehicle>;
export const VehicleSchema = SchemaFactory.createForClass(Vehicle);

VehicleSchema.index({ licensePlate: 1 }, { unique: true });
