import { Module } from '@nestjs/common';
import { FlightService } from './service/flight.service';
import { FlightController } from './controller/flight.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlightEntity } from './model/entity/flight.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FlightEntity])],
  providers: [FlightService],
  controllers: [FlightController],
  exports: [TypeOrmModule]
})
export class AdminModule {}
