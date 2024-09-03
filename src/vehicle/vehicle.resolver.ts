import { Args, Context, Mutation, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Vehicle } from './models/vehicle.model';
import { VehicleService } from './vehicle.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { User } from './models/user.model';

@Resolver((of) => Vehicle)
export class VehicleResolver {
  constructor(private vehiclesService: VehicleService) {}

  @ResolveField((of) => User)
  user(@Parent() vehicle: Vehicle): any {
    return { __typename: 'User', id: vehicle.userId };
  }

  @Mutation((returns) => Vehicle)
  async createVehicle(
    @Args('createVehicleData') createVehicleData: CreateVehicleDto,
    @Context('userId') userId: string,
  ) {
    return this.vehiclesService.create({...createVehicleData, userId});
  }
}
