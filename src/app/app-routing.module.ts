import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule} from '@angular/router';
import { AddBookingComponent } from './components/add-booking/add-booking.component';


const routes: Routes = [
  {path: 'reserva', component: AddBookingComponent},
  {path: '**', pathMatch:'full', redirectTo:'reserva'}

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {useHash:true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
