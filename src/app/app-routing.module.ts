import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { FirstComponent } from './first/first.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'first-component',
    component: FirstComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'child-a', // child route path
        component: ChildAComponent, // child route component that the router renders
      },
      {
        path: 'child-b',
        component: ChildBComponent, // another child route component that the router renders
      },
    ],
  },
  { path: 'second-component', component: SecondComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `home-component`
  { path: '**', component: PageNotFoundComponentComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
