import { ApiProperty } from '@nestjs/swagger';

export class OffersWebDto {
    @ApiProperty()
    id: string;
    @ApiProperty()
    offerPrice: number;
    @ApiProperty()
    regularPrice: number;
    @ApiProperty()
    from: string;
    @ApiProperty()
    to: string;
    @ApiProperty()
    expirationDate: string;
    @ApiProperty()
    season: string;
    @ApiProperty()
    isSeasonal: boolean;
    @ApiProperty()
    isClientExclusive: boolean;
    @ApiProperty()
    isLessRotation: boolean;

    
    constructor(offerPrice: number, regularPrice: number, from: string, to: string,  expirationDate: string, season: string, isSeasonal: boolean, isClientExclusive: boolean, isLessRotation: boolean) {
        this.offerPrice = offerPrice;
        this.regularPrice = regularPrice;
        this.from = from;
        this.to = to;
        this.expirationDate = expirationDate;
        this.season = season;
        this.isSeasonal = isSeasonal;
        this.isClientExclusive = isClientExclusive;
        this.isLessRotation = isLessRotation;
    }
}