import { Controller, Get, ForbiddenException } from '@nestjs/common';
import { CountryWebResponseDto } from '../model/dto/country.web.response.dto';
import { CountryService } from '../service/country.service';
import { Country, CountryClientResponseDto, Name } from '../model/dto/country.client.response.dto';
import { Observable, map, mergeMap, catchError } from 'rxjs';
import { resourceUsage } from 'process';

@Controller('api/v1/countries')
export class CountryController {
    
    constructor(private readonly countryService: CountryService) {}

    @Get()
    getCountryParams() {
        // return this.countryService.getCountryParams().subscribe(x => {
        //     return x.data.map(z => {
        //         return new CountryWebResponseDto(
        //         z.country.name.official,
        //         z.country.name.capital[0],
        //         z.country.name.region,
        //         z.country.name.subregion
        //         )
        //     })
        // })

        let cw = new CountryWebResponseDto("","","","")

        // return this.countryService.getCountryParams().subscribe(
            
        //     (data: CountryClientResponseDto[]) => {
        //         cw.name = data[0].country.name.official,
        //         cw.capital = data[0].country.name.capital[0],
        //         cw.region = data[0].country.name.region,
        //         cw.subRegion = data[0].country.name.subregion
                
        //     },
        //     (error: any) => { console.error(error) }
        // )

        const res = this.countryService.getCountryParams()

        console.log("RES::", res)

        return res.pipe(
            mergeMap((response) => {

                return response.data

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
            }),
            map((data) => {
                // console.log("COUNTRY::", data[0].name.official)

                // for (let i = 0; i < 10; i++) {

                    // console.log("COUNTRY::", data[i].name.official)


                    
                    
                // }


                console.log(data)


                return data[0].name.official
                // data.capital[0],
                // data[0].region,
                // data[0].subregion


                // data.array.forEach(element => {
                //         element.name.official, 
                //         element.region,
                //         element.subregion
                // });

            })
        )
        
        // .pipe(
        //     catchError(() => {
        //       throw new ForbiddenException('API not available');
        //     }),
        //   );
    


    }
    
}