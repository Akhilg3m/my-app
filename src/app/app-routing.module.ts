import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DirectivesComponent } from './directives/directives.component';
import { EventComponent } from './event/event.component';
import { StudentsComponent } from './students/students.component';
import { PipesComponent } from './pipes/pipes.component';
import { ProductsComponent } from './products/products.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { ParentComponent } from './parent/parent.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NavComponent } from './nav/nav.component';
import { CartComponent } from './cart/cart.component';
import { AboutCompanyComponent } from './about-us/about-company/about-company.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'dashboard', canActivate:[AuthenticationGuard], component: DashboardComponent, children:[
    {path:'welcome', component:WelcomeComponent},
    {path:'home', component:HomeComponent},
    {path:'data-binding', component: DataBindingComponent},
    {path:'calculator', component: CalculatorComponent},
    {path:'directives', component: DirectivesComponent},
    {path:'event', component: EventComponent},
    {path:'students', component: StudentsComponent},
    {path:'pipes', component: PipesComponent},
    {path:'products', component: ProductsComponent},
    {path:'vehicles', component: VehiclesComponent},
    {path:'create-vehicle', component: CreateVehicleComponent},
    {path:'create-user', component: CreateUserComponent},
    {path:'vehicle-details/:id', component: VehicleDetailsComponent},
    {path:'edit-vehicle/:id', component: CreateVehicleComponent},
    {path:'parent', component: ParentComponent},
    {path:'product-list', component: ProductListComponent},
    {path:'nav', component: NavComponent},
    {path:'cart', component: CartComponent},
    {path:'about-company', component:AboutCompanyComponent},
    {
      path: 'payments',
      loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule)
    }
  ]},
  {path:'', component: LoginComponent},
  {path:'**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
