import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButtonModule],
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  enviar(event: Event) {
    event.preventDefault();
    if (this.contactForm.valid) {
      console.log('Form Submitted', this.contactForm.value);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  ngOnInit(): void {}

  hasErrors(field: string, typeError: string): boolean {
    const control = this.contactForm.get(field);
    return control?.hasError(typeError) && control?.touched || false;
  }
}