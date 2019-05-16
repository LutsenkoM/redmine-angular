import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../shared/services/auth/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

    formReg: FormGroup;
    formUsers = [];
    successMessage = false;
    errorMessage = false;

    constructor(private auth: AuthService, private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.formReg = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            pass: ['', [Validators.required, Validators.minLength(6)]],
            passConfirm: ['', Validators.required]
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

}
