import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DronesModule } from './modules/drones.module';
import * as ormConfig from '../config/orm';
import Drone from 'db/models/drone.entity';

@Module({
  imports: [DronesModule,
    TypeOrmModule.forRoot(ormConfig),
    TypeOrmModule.forFeature([Drone]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
