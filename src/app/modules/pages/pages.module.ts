import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { NbCardModule, NbProgressBarModule, NbTabsetModule } from '@nebular/theme';
import { CertificationsComponent } from './certifications/certifications.component';
import { ProjectsComponent } from './projects/projects.component';


@NgModule({
  declarations: [HomeComponent, CertificationsComponent, ProjectsComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NbCardModule,
    NbProgressBarModule,
    NbTabsetModule,
  ]
})
export class PagesModule { }
