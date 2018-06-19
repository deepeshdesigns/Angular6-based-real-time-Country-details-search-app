import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CountriesService } from '../countries.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  myControl: FormControl = new FormControl();
  keyword = '';
  options: any = [];

  constructor(
    private country: CountriesService,
    private router: Router
  ) {
  }

  onKeywordChange() {
    this.search(this.keyword);
  }

  goToSeachHistory() {
    const historyRoute = '/history';
    this.router.navigate([historyRoute]);
  }

  /* Thismethod is used to ensure that the filtering list should only appear when min. 3 characters are typed */

  search(keyword) {
    // console.log(keyword);
    if (keyword.length < 3) {
      return this.options = [];
    }
    this.country.search(keyword).subscribe(data => {
      this.options = data;
      // console.log(data);
    });
  }

  /* This method is used to call the method to render the details of the country which is recently selected from the drop down list in Search box*/
  onCountrySelect(country) {
    const numericCode = country.NumericCode;
    this.country.get(numericCode).subscribe((filteredCountry: any) => {
      const url = `country/${filteredCountry.NumericCode}`;
      this.router.navigate([url]);
      console.log(filteredCountry);
    });
  }

  /* On initialisation of this component, reverse the order of History object (array of country details) so that when rendered, it gives recent searches on the top */
  ngOnInit() {
    const history = this.country.getHistory();
    this.options = history.slice(0, history.length).reverse().slice(0, 5);
    this.country.getCountries().subscribe(data => {
      // console.log(data);
    });
    // this.country.search('ind').subscribe(data => console.log(data));
  }

}
