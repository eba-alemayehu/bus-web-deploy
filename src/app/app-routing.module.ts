import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'booking', loadChildren: () => import('./modules/pages/booking/booking.module').then(m => m.BookingModule) },
  { path: 'bus', loadChildren: () => import('./modules/pages/bus/bus.module').then(m => m.BusModule) },
  { path: 'carrier', loadChildren: () => import('./modules/pages/carriers/carriers.module').then(m => m.CarriersModule) },
  { path: 'trip/search', loadChildren: () => import('./modules/pages/trip/search/search.module').then(m => m.SearchModule) },
  { path: 'trip', loadChildren: () => import('./modules/pages/trip/trip.module').then(m => m.TripModule) },
  { path: 'home', loadChildren: () => import('./modules/pages/home/home.module').then(m => m.HomeModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
