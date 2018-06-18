import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialAppModule } from './ngmaterial.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { CountriesService } from './countries.service';
import { ApiService } from './api-service';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { StorageService } from './storage.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    CountryDetailsComponent,
    SearchHistoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialAppModule,
    AppRoutingModule,
    /*
    RouterModule.forRoot([

      
      //{path: '', component: AppComponent },
      //we dont need this if we have already put the main code in the app.component.html 
      
        { path: 'search', component: SearchBoxComponent },
        { path: 'history', component: SearchHistoryComponent },
       
      { path: '', redirectTo: 'search', pathMatch: 'full'},
           { path: '**', redirectTo: 'search', pathMatch: 'full' }
      
    ],{useHash: true}) */
  ],
  providers: [CountriesService, ApiService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
