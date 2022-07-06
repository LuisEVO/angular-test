import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormView } from './views/contact-form/contact-form.view';

const routes: Routes = [{
  path: '',
  component: ContactFormView
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactFormRoutingModule { }
