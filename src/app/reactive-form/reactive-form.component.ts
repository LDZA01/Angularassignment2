import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
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
    age: new FormControl(null, [Validators.required, Validators.min(0)]),
  })

  // constructor(private fb: FormBuilder) {
  //   this.loginForm = this.fb.group({
  //     email: ['', [Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(50)]],
  //     password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
  //   });

  //   this.demographicForm = this.fb.group({
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     birthDate: ['', Validators.required],
  //     age: ['', [Validators.required, Validators.min(0)]]
  //   });
  // }

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
