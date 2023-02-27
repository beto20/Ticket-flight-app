import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OfferService } from './service/offer.service';
import { OfferController } from '../admin/controller/offer.controller';
import { OfferEntity } from './model/entity/offer.entity';

@Module({
    imports: [TypeOrmModule.forFeature([OfferEntity])],
    providers: [OfferService],
    controllers: [OfferController],
    exports: [TypeOrmModule]
})
export class OfferModule {}
