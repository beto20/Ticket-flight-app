import { Controller, Get } from '@nestjs/common';
import { OfferWebResponseDto } from "../model/dto/offer.web.response.dto";
import { OfferService } from '../service/offer.service';
import { ApiTags } from '@nestjs/swagger';
import { SkipAuth } from 'src/auth/util/auth.decorator';

@ApiTags('Offers')
@Controller('api/v1/offers')
export class OfferController {

    constructor(private readonly offerService: OfferService) {
    }

    @Get()
    @SkipAuth()
    async getSpecialOffers(): Promise<OfferWebResponseDto[]> {
        return this.offerService.getSpecialOffers()
    }
}