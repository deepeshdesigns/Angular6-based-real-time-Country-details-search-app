import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { CountriesService } from '../countries.service';

/* Note - Countriesservice will render the methods for following operations 

1. Getting the details of the country currently selected
2. Calling the service storage.service.ts to store the details of the current country searched in the local storage of the browser 
3. 
*/

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  countryId: string;
  country: any;
  constructor(
    private route: ActivatedRoute,
    private countryService: CountriesService
  ) {

  }

  /* This is the component , when initialised will call the method inside Country Service to render the details of the country which is recently selected */


  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      this.countryId = param['countryId'];
      this.countryService.get(this.countryId).subscribe(country => {
        this.country = country;
      });

    });
  }

}
