import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Vehicle } from './models/vehicle.model';
import { Model } from 'mongoose';
import { CreateVehicleDto } from './dto/create-vehicle.dto';

@Injectable()
export class VehicleService {
  constructor(
    @InjectModel(Vehicle.name) private vehicleModel: Model<Vehicle>,
  ) {}

  async create(createVehicleDto: CreateVehicleDto): Promise<Vehicle> {
    const createdVehicle = await this.vehicleModel.create(createVehicleDto);
    return createdVehicle;
  }

  async edit(
    createVehicleDto: CreateVehicleDto,
    vehicleId: string,
  ): Promise<Vehicle> {
    const updatedVehicle = await this.vehicleModel.findOneAndUpdate(
      { _id: vehicleId },
      { $set: { ...createVehicleDto } },
      { new: true },
    );
    return updatedVehicle;
  }

  async findVehicles(params): Promise<Vehicle[]> {
    const createdVehicle = await this.vehicleModel.find(params);
    return createdVehicle;
  }
}
