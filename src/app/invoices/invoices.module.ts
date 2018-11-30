import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {InvoicesPage} from './invoices.page';
import {CommonAppModule} from '../common-app/common-app.module';

const routes: Routes = [
  {
    path: '',
    component: InvoicesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    CommonAppModule
  ],
  declarations: [InvoicesPage]
})
export class InvoicesPageModule {
}
