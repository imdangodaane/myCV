import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { NbCardModule, NbProgressBarModule } from '@nebular/theme';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NbCardModule,
    NbProgressBarModule
  ]
})
export class PagesModule { }
