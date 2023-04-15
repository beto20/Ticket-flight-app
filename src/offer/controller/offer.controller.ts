import { Body, Controller, Get, UseGuards } from '@nestjs/common';
import { OfferWebResponseDto } from "../model/dto/offer.web.response.dto";
import { OfferService } from '../service/offer.service';
import { Roles } from "src/user/util/roles.decorator";
import { Role } from "src/user/model/enum/role";
import { AuthGuard } from "src/auth/util/auth.guard";
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Offers')
@Controller('api/v1/offers')
export class OfferController {

    constructor(private readonly offerService: OfferService) {
    }

    @UseGuards(AuthGuard)
    @Roles(Role.admin)
    @Get()
    async getSpecialOffers(): Promise<OfferWebResponseDto[]> {
        return this.offerService.getSpecialOffers()
    }
}