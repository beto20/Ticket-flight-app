import { Body, Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/util/auth.guard';
import { OfferWebResponseDto } from "src/offer/model/dto/offer.web.response.dto";
import { Role } from 'src/user/model/enum/role';
import { Roles } from 'src/user/util/roles.decorator';
import { ApiBody, ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('Offers')
@Controller('api/v1/back/offers')
export class OfferController {

    constructor() {
    }

    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @UseGuards(AuthGuard)
    @Roles(Role.admin)
    @Get()
    getSpecialOffers(): OfferWebResponseDto[] {
        return null
    }
}