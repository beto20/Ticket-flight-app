import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OfferService } from './service/offer.service';
import { OfferEntity } from './model/entity/offer.entity';
import { OfferController } from './controller/offer.controller';

@Module({
    imports: [TypeOrmModule.forFeature([OfferEntity])],
    providers: [OfferService],
    controllers: [OfferController],
    exports: [TypeOrmModule]
})
export class OfferModule {}
