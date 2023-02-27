export class CountryWebResponseDto {
    name: string;
    region: string;
    subRegion: string;
    capital: string;

    constructor(name: string, region: string, subRegion: string, capital: string) {
        this.name = name
        this.region = region
        this.subRegion = subRegion
        this.capital = capital
    }
}