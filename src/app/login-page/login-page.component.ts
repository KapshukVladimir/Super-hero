import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
        email: new FormControl('', [
          Validators.required,
          Validators.pattern('^([\\w\\d_\\-])+(([^\\.]*\\.[^\\.]*)?){1,3}@([\\w\\d]){1,5}(.com|.co|.org|.net|.us)')
        ]),
        password: new FormControl(null, [
          Validators.minLength(5),
          Validators.required,
          Validators.pattern('(?=.*[\\d])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[\\d\\w!@#$%^&*]{6,}')
        ])
      }
    );
  }

  signIn(): void {
    const user = {
      email: this.form.value.email,
      password: this.form.value.password
    };
    console.log(user);
    this.form.reset();
  }
}
