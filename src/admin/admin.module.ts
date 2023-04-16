import { Module } from '@nestjs/common';
import { FlightService } from './service/flight.service';
import { FlightController } from './controller/flight.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlightEntity } from './model/entity/flight.entity';
import { AirplaneEntity } from './model/entity/airplane.entity';
import { AirplaneService } from './service/airplane.service';
import { AirplaneController } from './controller/airplane.controller';
import { OfferModule } from 'src/offer/offer.module';
import { OfferBackService } from './service/offer.service';
import { OfferBackController } from './controller/offer.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([FlightEntity, AirplaneEntity]),
    OfferModule
  ],
  providers: [FlightService, AirplaneService, OfferBackService],
  controllers: [FlightController, AirplaneController, OfferBackController],
  exports: [TypeOrmModule]
})
export class AdminModule {}
