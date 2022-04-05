import { Module } from '@nestjs/common';
import { DronesService } from '../services/drones.service';
import { DronesController } from '../controllers/drones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Drone from 'db/models/drone.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Drone])],
  providers: [DronesService],
  controllers: [DronesController]
})
export class DronesModule {}
