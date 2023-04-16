import { Body, Controller, Delete, Get, Post, Put, UseGuards } from '@nestjs/common';
import { AirplaneWebDto } from '../model/dto/airplane.web.dto';
import { AirplaneWebDeleteDto } from "../model/dto/airplane.web.delete.dto";
import { AirplaneWebFilterDto } from '../model/dto/airplane.web.filter.dto';
import { AirplaneWebResponseDto } from '../model/dto/airplane.web.response.dto';
import { AirplaneWebUpdateDto } from '../model/dto/airplane.web.update.dto';
import { AirplaneService } from "../service/airplane.service";
import { ApiBody, ApiTags, ApiResponse } from '@nestjs/swagger';
import { Roles } from "src/user/util/roles.decorator";
import { AuthGuard } from 'src/auth/util/auth.guard';
import { Role } from 'src/user/model/enum/role';

@ApiTags('Airplanes-back')
@Controller('api/v1/back/airplanes')
export class AirplaneController {
    
    constructor(private readonly airplaneService: AirplaneService) {
    }

    @ApiBody({ type: [AirplaneWebDto] })
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @UseGuards(AuthGuard)
    @Roles(Role.admin)
    @Post('/massive-save')
    registerMassiveAirplanes(@Body() airplanes: AirplaneWebDto[]) {
        this.airplaneService.registerMassiveAirplanes(airplanes)
    }

    @ApiBody({ type: [AirplaneWebDeleteDto] })
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @UseGuards(AuthGuard)
    @Roles(Role.admin)
    @Delete('/massive-delete')
    deleteMassiveAirplanes(@Body() airplanes: AirplaneWebDeleteDto[]) {
        this.airplaneService.deleteMassiveAirplanes(airplanes)
    }

    @ApiBody({ type: [AirplaneWebFilterDto] })
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @UseGuards(AuthGuard)
    @Roles(Role.admin)
    @Get('/get-with-filters')
    getAllAirplanesWithFilters(@Body() airplane: AirplaneWebFilterDto): Promise<AirplaneWebResponseDto[]> {
        return this.airplaneService.getAllAirplanesWithFilters(airplane)
    }

    @ApiBody({ type: [AirplaneWebUpdateDto] })
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @UseGuards(AuthGuard)
    @Roles(Role.admin)
    @Put('/massive-update')
    updateMassiveAirplanesById(@Body() airplanes: AirplaneWebUpdateDto[]) {
        this.airplaneService.updateMassiveAirplanesById(airplanes)
    }

}