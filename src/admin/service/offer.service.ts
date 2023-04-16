import { Injectable } from '@nestjs/common';
import { OffersWebDto } from '../model/dto/offer.web.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OfferEntity } from 'src/offer/model/entity/offer.entity';

@Injectable()
export class OfferBackService {

    constructor(
        @InjectRepository(OfferEntity)
        private offerRepository: Repository<OfferEntity>
    ) {}

    registerMassiveOffers(offers: OffersWebDto[]) {
        offers.map(o => {
            let entity = new OfferEntity(
                o.offerPrice,
                o.regularPrice,
                o.from,
                o.to,
                o.expirationDate,
                o.season,
                o.isSeasonal,
                o.isClientExclusive,
                o.isLessRotation,
            )
            return this.offerRepository.save(entity);
        })
    }

}