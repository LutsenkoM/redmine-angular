import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    formLog: FormGroup;
    emailLog: string;
    passLog: string;
    users = [];
    errorMessageLog = false;
    logIndex: number;
    logIndexPass: number;

    constructor(private auth: AuthService, private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.formLog = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            pass: ['', [Validators.required, Validators.minLength(6)]],
        });
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
