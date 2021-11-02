import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    PageNotFoundComponentComponent,
    ChildAComponent,
    ChildBComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
