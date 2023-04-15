import { Body, Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { AirplaneWebDto } from '../model/dto/airplane.web.dto';
import { AirplaneWebDeleteDto } from "../model/dto/airplane.web.delete.dto";
import { AirplaneWebFilterDto } from '../model/dto/airplane.web.filter.dto';
import { AirplaneWebResponseDto } from '../model/dto/airplane.web.response.dto';
import { AirplaneWebUpdateDto } from '../model/dto/airplane.web.update.dto';
import { AirplaneService } from "../service/airplane.service";
import { SkipAuth } from "src/auth/util/auth.decorator";
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('Airplanes')
@Controller('api/v1/back/airplanes')
export class AirplaneController {
    
    constructor(private readonly airplaneService: AirplaneService) {
    }

    @ApiBody({ type: [AirplaneWebDto] })
    @SkipAuth()
    @Post('/massive-save')
    registerMassiveAirplanes(@Body() airplanes: AirplaneWebDto[]) {
        this.airplaneService.registerMassiveAirplanes(airplanes)
    }

    @ApiBody({ type: [AirplaneWebDeleteDto] })
    @SkipAuth()
    @Delete('/massive-delete')
    deleteMassiveAirplanes(@Body() airplanes: AirplaneWebDeleteDto[]) {
        this.airplaneService.deleteMassiveAirplanes(airplanes)
    }

    @ApiBody({ type: [AirplaneWebFilterDto] })
    @SkipAuth()
    @Get('/get-with-filters')
    getAllAirplanesWithFilters(@Body() airplane: AirplaneWebFilterDto): Promise<AirplaneWebResponseDto[]> {
        return this.airplaneService.getAllAirplanesWithFilters(airplane)
    }

    @ApiBody({ type: [AirplaneWebUpdateDto] })
    @SkipAuth()
    @Put('/massive-update')
    updateMassiveAirplanesById(@Body() airplanes: AirplaneWebUpdateDto[]) {
        this.airplaneService.updateMassiveAirplanesById(airplanes)
    }

}