import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
    public loginForm!: FormGroup;

    constructor(private formBuilder: FormBuilder) {}
    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            username: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required])
        })
    }

    validateRequiredError(control: AbstractControl): boolean {
        if(control.invalid && control.touched) {
            return true;
        } else {
            return false;
        }
    }

    controlIsValid(control: AbstractControl): boolean {
        if(control.valid && control.dirty) {
            return true;
        } else {
            return false;
        }
    }

}