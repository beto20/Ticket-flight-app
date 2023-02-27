import { Injectable } from '@nestjs/common';
import { OfferWebResponseDto } from "../model/dto/offer.web.response.dto";
import { InjectRepository } from '@nestjs/typeorm';
import { OfferEntity } from '../model/entity/offer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OfferService {

    constructor(
        @InjectRepository(OfferEntity)
        private offerRepository: Repository<OfferEntity>,
    ) {}


    async getSpecialOffers(): Promise<OfferWebResponseDto[]> {
        const offerResponse =  await this.offerRepository.find()
        .then(offerEntity => {
            return offerEntity.map(o => {
                return new OfferWebResponseDto(
                    o.offerPrice,
                    o.regularPrice,
                    o.from,
                    o.to,
                    o.expirationDate,
                    fromString(o.season),
                    o.isSeasonal,
                    o.isClientExclusive,
                    o.isLessRotation
                );
            });
        });

        return offerResponse;
    }

}