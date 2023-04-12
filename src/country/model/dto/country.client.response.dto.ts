export class CountryClientResponseDto {
    name: Name;
    capital: string[];
    region: string;
    subregion: string;

    constructor(name: Name, capital: string[], region: string, subregion: string) {
        this.name = name
        this.capital = capital
        this.region = region
        this.subregion = subregion
    }
}

export class Name {
    official: string;

    constructor(official: string) {
        this.official = official
    }
}