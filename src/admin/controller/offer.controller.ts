import { Body, Controller, Get } from "@nestjs/common";
import { OfferWebResponseDto } from "src/offer/model/dto/offer.web.response.dto";

@Controller('api/v1/back/offers')
export class OfferController {

    constructor() {
    }

    @Get()
    getSpecialOffers(): OfferWebResponseDto[] {
        return null
    }
}