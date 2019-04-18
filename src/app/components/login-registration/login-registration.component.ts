import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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
    passLog: string;
    successMessage = false;
    errorMessage = false;
    errorMessageLog = false;
    logIndex: number;
    logIndexPass: number;
    storLogin: string;
    storPass: string;

    constructor(private auth: AuthService, private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.formReg = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            pass: ['', [Validators.required, Validators.minLength(6)]],
            passConfirm: ['', Validators.required]
        });

        this.formLog = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            pass: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    onSubmitReg() {
        if (this.formReg.value.pass === this.formReg.value.passConfirm) {
            this.formUsers.push({'email': this.formReg.value.email, 'password': this.formReg.value.pass, 'name': this.formReg.value.name});
            localStorage.setItem(`users`, JSON.stringify(this.formUsers));
            this.successMessage = true;
            setTimeout(() => {
                this.successMessage = false;
            }, 5000);
        } else {
            this.errorMessage = true;
            setTimeout(() => {
                this.errorMessage = false;
            }, 5000);
        }
        this.formReg.reset();
    }

    changeAuthStatus() {

        this.emailLog = this.formLog.value.email;
        this.passLog = this.formLog.value.pass;
        this.users = (JSON.parse(localStorage.getItem(`users`)));
        this.logIndex = this.users.findIndex(obj => obj.email === this.emailLog);
        this.logIndexPass = this.users.findIndex(obj => obj.password === this.passLog);

        if (this.logIndex < 0 || this.logIndexPass < 0) {
            this.errorMessageLog = true;
            setTimeout(() => {
                this.errorMessageLog = false;
            }, 5000);
            this.formLog.reset();
            return;
        }

        if (this.logIndex < 0 && this.passLog !== this.users[this.logIndex].password) {
            this.errorMessageLog = true;
            setTimeout(() => {
                this.errorMessageLog = false;
            }, 5000);
            this.formLog.reset();
        } else {
            localStorage.setItem(`token`, JSON.stringify({'email': this.emailLog, 'pass': this.passLog}));
            this.auth.login();
        }


    }

}
