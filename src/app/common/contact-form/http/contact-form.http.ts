import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ContactFormConfig, CONTACT_FORM_CONFIG } from '../config/contact-form.config';
import { ContactForm } from '../interfaces/contact-form.interface';

@Injectable()
export class ContactFormHttp {
  private endpoint: string;

  constructor(
    private http: HttpClient,
    @Inject(CONTACT_FORM_CONFIG) private config: ContactFormConfig
    ) {
      this.endpoint = this.config.saveUrl;
    }

  save(form: ContactForm) {
    return this.http.post(this.endpoint, form);
  }
}
