import { Body, Controller, Get } from "@nestjs/common";
import { OfferWebResponseDto } from "../model/dto/offer.web.response.dto";
import { OfferService } from '../service/offer.service';

@Controller('api/v1/offers')
export class OfferController {

    constructor(private readonly offerService: OfferService) {
    }

    @Get()
    async getSpecialOffers(): Promise<OfferWebResponseDto[]> {
        return this.offerService.getSpecialOffers()
    }
}