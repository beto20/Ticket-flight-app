export class CountryDto {
    official: string;
    capital: string;
    region: string;
    subregion: string;

    constructor(official: string, capital: string, region: string, subregion: string) {
        this.official = official
        this.capital = capital
        this.region = region
        this.subregion = subregion
    }
}