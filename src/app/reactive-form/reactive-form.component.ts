import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})

export class ReactiveFormComponent {
  

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')),
    password: new FormControl(null ,[Validators.minLength(8), Validators.maxLength(100)])

  });

  demographicForm: FormGroup = new FormGroup({
    firstName: new FormControl(null,Validators.required),
    lastName: new FormControl(null,Validators.required),
    birthDate: new FormControl(null, Validators.required),
    idcard: new FormControl(null, [Validators.required, Validators.minLength(13),Validators.maxLength(13)]),
  })

  onLoginSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }

  onDemographicSubmit() {
    if (this.demographicForm.valid) {
      console.log(this.demographicForm.value);
    }
  }
}
