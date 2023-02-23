import { AirplaneWebDto } from './airplane.web.dto';
import { AirplaneWebFilterDto } from './airplane.web.filter.dto';
import { AirplaneWebResponseDto } from './airplane.web.response.dto';
import { AirplaneWebUpdateDto } from './airplane.web.update.dto';
import { AirplaneWebDeleteDto } from './airplane.web.delete.dto';

describe('AirplaneWebDto', () => {
    it('should be defined', () => {
        expect(new AirplaneWebDto("",1,"","",1,1)).toBeDefined();
    });
});


describe('AirplaneWebFilterDto', () => {
    it('should be defined', () => {
        expect(new AirplaneWebFilterDto("",1,"",1)).toBeDefined();
    });
});

describe('AirplaneWebResponseDto', () => {
    it('should be defined', () => {
        expect(new AirplaneWebResponseDto("",1,"","",1,1,true)).toBeDefined();
    });
});

describe('AirplaneWebDeleteDto', () => {
    it('should be defined', () => {
        expect(new AirplaneWebDeleteDto("","",1,"","",1,1)).toBeDefined();
    });
});

describe('AirplaneWebUpdateDto', () => {
    it('should be defined', () => {
        expect(new AirplaneWebUpdateDto("","",1,"","",1,1,true)).toBeDefined();
    });
});