import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactFormRoutingModule } from './contact-form-routing.module';
import { ContactFormView } from './views/contact-form/contact-form.view';
import { CommonContactFormModule } from '@common/contact-form/contact-form.module';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    ContactFormView
  ],
  imports: [
    CommonModule,
    ContactFormRoutingModule,
    CommonContactFormModule.forRoot({ saveUrl: `${environment.baseUrl}/contact` })
  ],
})
export class ContactFormModule { }
