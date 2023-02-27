import { Injectable } from '@nestjs/common';
import { CountryWebResponseDto } from '../model/dto/country.web.response.dto';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CountryClientResponseDto, Country, Name } from '../model/dto/country.client.response.dto';
import { response } from 'express';

@Injectable()
export class CountryService {

    constructor(private readonly httpService: HttpService) {}
// : Observable<AxiosResponse<CountryClientResponseDto[]>>
    getCountryParams() {
        let req = this.httpService.get('https://restcountries.com/v3.1/all')

        console.log("RES:: ", req)

        // req.subscribe(x => {
        //     console.log("DATA::", x.data)
        //     return x.data
        // })

        // let c = new CountryClientResponseDto()

        return req

        /*
        return req.pipe(
            response
            map((response) => {
                return response.data
                // console.log("RESPONSE::", response)
                // return response.data.forEach(element => {
                //     // console.log("ELEMENT::", element.name.official);
                //     let country = new Name(
                //         element.name.official, 
                //         "", 
                //         element.region,
                //         element.subregion
                //     )

                //     // console.log("COUNTRY::", country);
                //     return country
                // });

                // for (const i of response.data) {
                    // console.log("COUNTRY::", i);
                    // return response.data[1].name.official
                // }


                // return response.data.forEach(element => {
                //     console.log("COUNTRY::", element.name.official)
                //         element.name.official, 
                //         element.region,
                //         element.subregion
                // });



                // return new Name(
                //     response.data[0].name.official, 
                //     response.data[0].capital[0],
                //     response.data[0].region,
                //     response.data[0].subregion
                // )
                
            }),


            // map((data) => ({
                



                // official: data.name.official,
                // capital: data.capital[0],
                // region: data.region,
                // subregion: data.subregion

                // return new Name(
                //     response.data[0].name.official, 
                //     response.data[0].capital[0], 
                //     response.data[0].region, 
                //     response.data[0].subregion
                // )
            // }))
        )
        */
    }
}