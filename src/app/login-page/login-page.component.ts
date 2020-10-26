import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  entry = true;
  showModal = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.form = new FormGroup({
        email: new FormControl('', [
          Validators.required,
          Validators.pattern('^([\\w\\d_\\-])+(([^\\.]*\\.[^\\.]*)?){1,3}@([\\w\\d]){1,5}(.com|.co|.org|.net|.us)')
        ]),
        password: new FormControl(null, [
          Validators.minLength(5),
          Validators.required,
          Validators.pattern('(?=.*[\\d])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[\\d\\w!@#$%^&*]{5,}')
        ])
      }
    );
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('flag')) {
      this.showModal = true;
      this.authService.changeStateFlag();
      sessionStorage.clear();
    }
  }


  createToken(): string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 15; i++) {
      text += possible.charAt(Math.floor(
        Math.random() * possible.length));
    }
    return text;
  }

  signIn(): void {
    const token: object = {
      idToken: this.createToken(),
      expire: Date.now()
    };
    sessionStorage.setItem('token', JSON.stringify(token));
    const users = JSON.parse(localStorage.getItem('users'));
    users.forEach(el => {
      if (el.email === this.form.value.email && el.password === this.form.value.password) {
        this.entry = true;
        this.authService.changeStateFlag();
        this.router.navigate(['/heroes-page']);
        this.form.reset();
      } else {
        this.entry = false;
      }
    });
  }
}
