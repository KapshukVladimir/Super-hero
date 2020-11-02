import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../shared/interfaces';

@Component({
  selector: 'app-create-new-account',
  templateUrl: './create-new-account.component.html',
  styleUrls: ['./create-new-account.component.scss']
})
export class CreateNewAccountComponent implements OnInit {
  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
        username: new FormControl('', [
          Validators.required,
          Validators.pattern('^[(\w\d)(-|(\s)|A-Z)(\w\d)]{8,}$')
        ]),
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

  createNewAccount({username, email, password}): void {
    if (this.form.valid) {
      const user: User = {
        id: Date.now(),
        username,
        email,
        password,
      };
      if (localStorage.getItem('users')) {
        const users = [...JSON.parse(localStorage.getItem('users')), user];
        localStorage.setItem('users', JSON.stringify(users));
      } else {
        const users: object[] = [user];
        localStorage.setItem('users', JSON.stringify(users));
      }
    }
    this.form.reset();
  }
}
