import { FlightDto } from './flight.dto';
import { FlightWebDeleteDto } from './flight.web.delete.dto';
import { FlightWebFilterDto } from './flight.web.filter.dto';
import { FlightWebResponseDto } from './flight.web.response.dto';
import { FlightWebUpdateDto } from './flight.web.update.dto';

describe('FlightDto', () => {
  it('should be defined', () => {
    expect(new FlightDto(true,"","","","","","","","","",true)).toBeDefined();
  });
});

describe('FlightWebFilterDto', () => {
  it('should be defined', () => {
    expect(new FlightWebFilterDto(true,"","","","",true)).toBeDefined();
  });
});

describe('FlightWebDeleteDto', () => {
  it('should be defined', () => {
    expect(new FlightWebDeleteDto(true,"","","","","","",true)).toBeDefined();
  });
});


describe('FlightWebResponseDto', () => {
  it('should be defined', () => {
    expect(new FlightWebResponseDto(true,"","","","","","","",true)).toBeDefined();
  });
});

describe('FlightWebUpdateDto', () => {
  it('should be defined', () => {
    expect(new FlightWebUpdateDto("",true,"","","","","","","","","",true)).toBeDefined();
  });
});