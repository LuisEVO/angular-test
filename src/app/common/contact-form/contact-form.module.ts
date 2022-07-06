import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactFormComponent } from './components/contact-form.component';
import { ContactFormMaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DirtyErrorStateMatcher } from '@common/form/utils/dirty-matcher.util';
import { ContactFormConfig, CONTACT_FORM_CONFIG } from './config/contact-form.config';
import { ContactFormHttp } from './http/contact-form.http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ContactFormComponent],
  exports: [ContactFormComponent],
  imports: [CommonModule, ContactFormMaterialModule, ReactiveFormsModule, HttpClientModule],
  providers: [
    ContactFormHttp,
    {
      provide: ErrorStateMatcher,
      useClass: DirtyErrorStateMatcher,
    },
  ],
})
export class CommonContactFormModule {
  static forRoot(options: ContactFormConfig): ModuleWithProviders<CommonContactFormModule> {
    return {
      ngModule: CommonContactFormModule,
      providers: [
        {
          provide: CONTACT_FORM_CONFIG,
          useValue: options
        }
      ],
    };
  }
}
