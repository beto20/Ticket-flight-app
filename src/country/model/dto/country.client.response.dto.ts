export class CountryClientResponseDto {
    country: Country;
    
    constructor(country: Country) {
        this.country = country
    }
}

export class Country {
    name: Name;

    constructor(name: Name) {
        this.name = name
    }
}

export class Name {
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