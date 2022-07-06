import { InjectionToken } from '@angular/core';

export interface ContactFormConfig {
  saveUrl: string;
}

export const CONTACT_FORM_CONFIG = new InjectionToken<ContactFormConfig>('ContactFormConfig');
