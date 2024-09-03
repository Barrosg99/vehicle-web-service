import { Module } from '@nestjs/common';
import { VehicleResolver } from './vehicle.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Vehicle, VehicleSchema } from './models/vehicle.model';
import { VehicleService } from './vehicle.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Vehicle.name, schema: VehicleSchema }]),
  ],
  providers: [VehicleResolver, VehicleService],
})
export class VehicleModule {}
