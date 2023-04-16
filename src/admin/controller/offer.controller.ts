import { Body, Controller, Get, UseGuards, Post } from '@nestjs/common';
import { AuthGuard } from 'src/auth/util/auth.guard';
import { Role } from 'src/user/model/enum/role';
import { Roles } from 'src/user/util/roles.decorator';
import { ApiBody, ApiTags, ApiResponse } from '@nestjs/swagger';
import { OffersWebDto } from '../model/dto/offer.web.dto';
import { OfferBackService } from '../service/offer.service';

@ApiTags('Offers-Back')
@Controller('api/v1/back/offers')
export class OfferBackController {

    constructor(private readonly offerService: OfferBackService) {
    }

    @ApiBody({ type: [OffersWebDto] })
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @UseGuards(AuthGuard)
    @Roles(Role.admin)
    @Post('/massive-save')
    registerSpecialOffers(@Body() offersWebDto: OffersWebDto[]) {
        this.offerService.registerMassiveOffers(offersWebDto)
    }
}