import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { Cp1Component } from './cp1/cp1.component';
import { Cp2Component } from './cp2/cp2.component';

import { HttpClientModule } from '@angular/common/http';
import { Cp1Service } from '../services/cp1.service';
import { NgxMaskModule } from 'ngx-mask'
import { FormsModule } from '@angular/forms';
import { CardModule } from '../../../../my-library/projects/web-components/src/public-api';


@NgModule({
  declarations: [
    Cp1Component,
    Cp2Component,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HttpClientModule,
    FormsModule,
    CardModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [
    Cp1Service  // Ajouter le service aux providers pour l'utiliser dans composants Cp1 et Cp2 
  ]
})
export class PagesModule { }
