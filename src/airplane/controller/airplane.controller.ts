import { Body, Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { AirplaneWebDto } from '../model/dto/airplane.web.dto';
import { AirplaneWebDeleteDto } from "../model/dto/airplane.web.delete.dto";
import { AirplaneWebFilterDto } from '../model/dto/airplane.web.filter.dto';
import { AirplaneWebResponseDto } from '../model/dto/airplane.web.response.dto';
import { AirplaneWebUpdateDto } from '../model/dto/airplane.web.update.dto';


@Controller('api/v1/back/airplane')
export class AirplaneController {
    
    @Post('/massive-save')
    registerMassiveAirplanes(@Body() airplanes: AirplaneWebDto[]) {

    }

    @Delete('/massive-delete')
    deleteMassiveAirplanes(@Body() airplanes: AirplaneWebDeleteDto[]) {

    }

    @Get('/get-with-filters')
    getAllAirplanesWithFilters(@Body() airplane: AirplaneWebFilterDto): AirplaneWebResponseDto[] {
        return null
    }

    @Put('/massive-update')
    updateMassiveAirplanesById(@Body() airplane: AirplaneWebUpdateDto[]) {

    }

}