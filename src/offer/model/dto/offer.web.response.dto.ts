export class OfferWebResponseDto  {

    offerPrice: number;
    regularPrice: number;
    from: string;
    to: string;
    expirationDate: string;
    season: Season;
    isSeasonal: boolean;
    isClientExclusive: boolean;
    isLessRotation: boolean;

    constructor(offerPrice: number, regularPrice: number, from: string, to: string, expirationDate: string, season: Season, isSeasonal: boolean, 
        isClientExclusive: boolean, isLessRotation: boolean) {
        this.offerPrice = offerPrice
        this.regularPrice = regularPrice
        this.from = from
        this.to = to
        this.expirationDate = expirationDate
        this.season = season
        this.isSeasonal = isSeasonal
        this.isClientExclusive = isClientExclusive
        this.isLessRotation = isLessRotation
    }
}