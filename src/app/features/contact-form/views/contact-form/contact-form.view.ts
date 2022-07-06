import { Component, OnInit } from '@angular/core';
import { ContactFormHttp } from '@common/contact-form/http/contact-form.http';
import { ContactForm } from '@common/contact-form/interfaces/contact-form.interface';
import { LayoutService } from '@core/layout/layout.service';

@Component({
  templateUrl: './contact-form.view.html',
})
export class ContactFormView implements OnInit {
  constructor(
    private layoutService: LayoutService,
    private contacFormHttp: ContactFormHttp
  ) {
    this.layoutService.setTitle('Formulario de contacto')
  }

  ngOnInit(): void {
  }

  save(values: ContactForm) {
    this.contacFormHttp.save(values)
    .subscribe(console.log)
  }

  statusValid(status: string) {
    console.log(status)
  }
}
