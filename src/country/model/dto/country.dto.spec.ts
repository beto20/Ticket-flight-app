import { CountryWebResponseDto } from './country.web.response.dto';
import { Country, CountryClientResponseDto, Name } from './country.client.response.dto';
import { Any } from 'typeorm';

describe('CountryWebResponseDto', () => {
    it('should be defined', () => {
        expect(new CountryWebResponseDto("","","","")).toBeDefined();
    });
});


describe('CountryClientResponseDto', () => {
    it('should be defined', () => {
        expect(new CountryClientResponseDto(new Country(new Name("", [], "", "")))).toBeDefined();
    });
});
