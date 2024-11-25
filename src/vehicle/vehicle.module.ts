import { Module } from '@nestjs/common';
import { VehicleResolver } from './vehicle.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Vehicle, VehicleSchema } from './models/vehicle.model';
import { VehicleService } from './vehicle.service';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([{ name: Vehicle.name, schema: VehicleSchema }]),
    RabbitMQModule.forRootAsync(RabbitMQModule, {
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        Logger.log(
          `🚀 RABBITMQ_URI: ${configService.get('RABBITMQ_URI')}`,
          'API',
        );
        return {
          uri:
            configService.get('RABBITMQ_URI') ||
            `amqp://${configService.get('RABBITMQ_USER')}:${configService.get(
              'RABBITMQ_PASSWORD',
            )}@${configService.get('RABBITMQ_HOST')}:${configService.get(
              'RABBITMQ_PORT',
            )}`,
          connectionInitOptions: { wait: false },
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [VehicleResolver, VehicleService],
})
export class VehicleModule {}
