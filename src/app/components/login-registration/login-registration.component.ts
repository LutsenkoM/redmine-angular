import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login-registration',
  templateUrl: './login-registration.component.html',
  styleUrls: ['./login-registration.component.scss']
})
export class LoginRegistrationComponent implements OnInit {

  formReg: FormGroup;
  formLog: FormGroup;
  formUsers = [];
  users = [];

  emailLog: string;
  emailReg: string;
  passLog: string;
  passReg: string;

  logIndex: number;
  constructor(private auth: AuthService) { }

  ngOnInit() {
      this.formReg = new FormGroup({
          name: new FormControl(''),
          email: new FormControl(''),
          pass: new FormControl('')
      });
      this.formLog = new FormGroup({
          email: new FormControl(''),
          pass: new FormControl('')
      });
  }

    onSubmitReg() {
        console.log('Submited!', this.formReg.value);
        this.formUsers.push({'email': this.formReg.value.email, 'password': this.formReg.value.pass, 'name': this.formReg.value.name });
        localStorage.setItem(`users`, JSON.stringify( this.formUsers ));
    }

    onSubmitLog() {
        // console.log('Login!', this.formLog.value);
    }

  changeAuthStatus() {

    this.emailLog = this.formLog.value.email;
    this.passLog = this.formLog.value.pass;
    // this.emailReg = this.formReg.value.email;
    // this.passReg = this.formReg.value.pass;
    //

    //
    //

      this.users = (JSON.parse(localStorage.getItem(`users`) ));



      this.logIndex = this.users.findIndex(obj => obj.email === this.emailLog);

      // this.passReg = this.formUsers[this.logIndex].password;


      console.log('storage array' + this.users);
      console.log( 'num' , this.users.findIndex(obj => obj.email === this.emailLog)) ;
      console.log('Log index array', this.logIndex);
      console.log('Object in array', this.users[this.logIndex]);
      // console.log('passReg' + this.passReg, 'passLog' + this.passLog );

      if (this.passLog === this.users[this.logIndex].password) {
            this.auth.login();
      } else {
        alert('Wrong login or email');
      }


    // if (status === 'login') {
    //   this.auth.login();
    //   console.log('change login');
    // } else {
    //   this.auth.logout();
    //   console.log('change logout');
    // }

  }



}
