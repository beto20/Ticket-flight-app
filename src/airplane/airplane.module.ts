import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AirplaneEntity } from './model/entity/airplane.entity';
import { AirplaneService } from './service/airplane.service';
import { AirplaneController } from './controller/airplane.controller';

@Module({
    imports: [TypeOrmModule.forFeature([AirplaneEntity])],
    providers: [AirplaneService],
    controllers: [AirplaneController],
    exports: [TypeOrmModule],
})
export class AirplaneModule {}
