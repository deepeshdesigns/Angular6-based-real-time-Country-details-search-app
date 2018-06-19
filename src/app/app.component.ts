import { Component, OnInit } from '@angular/core';
import { CountriesService } from './countries.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/* Using the  instance of routing module to use routing methods */

export class AppComponent implements OnInit {
  options: any = [];
  title = 'Country Information';
  constructor(
    private country: CountriesService,
    private router: Router
  ) {

  }
  
  /* This method helps to route to History component in the production as angular routing for SPA applications not work without configuration of server */

  goToSearchHistory() {
    const historyRoute = '/history';
    this.router.navigate([historyRoute]);
  }

  /* This method helps to route to Search box component in the production as angular routing for SPA applications not work without configuration of server */
  
  goToSearchBox() {
    const searchRoute = '/search';
    this.router.navigate([searchRoute]);
  }
  ngOnInit() {
    const history = this.country.getHistory();
    this.options = history.slice(0, history.length).reverse().slice(0, 5);
    this.country.getCountries().subscribe(data => {
      // console.log(data);
    });
    // this.country.search('ind').subscribe(data => console.log(data));
  }

}
