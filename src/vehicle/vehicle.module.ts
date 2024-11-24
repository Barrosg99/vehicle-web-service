import { Module } from '@nestjs/common';
import { VehicleResolver } from './vehicle.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Vehicle, VehicleSchema } from './models/vehicle.model';
import { VehicleService } from './vehicle.service';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Vehicle.name, schema: VehicleSchema }]),
    RabbitMQModule.forRoot(RabbitMQModule, {
      uri: 'amqp://guest:guest@localhost:5672',
      connectionInitOptions: { wait: false },
    }),
  ],
  providers: [VehicleResolver, VehicleService],
})
export class VehicleModule {}
