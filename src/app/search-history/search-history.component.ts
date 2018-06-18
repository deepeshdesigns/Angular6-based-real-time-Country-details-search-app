import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { Router } from '@angular/router';
// import { MatList } from '@angular/material';
@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent implements OnInit {

  /* history array object is created which will store the details of the countries searched so far */
  
  history: any = [];
  constructor(
    private router: Router,
    private countriesService: CountriesService,
  ) { }

  /* On intialisation of this component, the getHistory() method will be called which will get the entire history of search from local storage in the history object */

  ngOnInit() {
    const history = this.countriesService.getHistory();
    this.history = history.slice(0, history.length).reverse();

    // this.history = this.countriesService.getHistory().slice(0, );
    console.log(this.history);
  }

  /* This method will open the details of the country which is clicked from the countries displayed in the table in history page */

  openCountry(NumericCode) {
    const url = `country/${NumericCode}`;
      this.router.navigate([url]);
  }

}
