import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnlyNumbersLetters, PrefixPhone } from '@common/form/validators';
import { distinct, filter } from 'rxjs';
import { ContactForm } from '../interfaces/contact-form.interface';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  form: FormGroup;

  @Input() messageMaxLength = 20;
  @Output() statusValid = new EventEmitter<string>();
  @Output() save = new EventEmitter<ContactForm>();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [null, [Validators.required, OnlyNumbersLetters]],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, [Validators.required, PrefixPhone]],
      message: [null, [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.form.get('message')?.setValidators([Validators.required, Validators.maxLength(this.messageMaxLength)])

    this.form.statusChanges
      .pipe(
        distinct(),
        filter(status => status === 'VALID')
      )
      .subscribe(status => this.statusValid.emit(status))
  }

  hasError(control: 'name' | 'email' | 'phone' | 'message', error: string) {
    return this.form.get(control)?.hasError(error);
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    this.save.emit(this.form.value);
  }
}
