import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthenticationService } from '../../../core/services/authentication.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  matcher: ErrorStateMatcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService) {
    this.loginForm = this.fb.group(
      {
        email: ['', [Validators.required]],
        password: ['', [Validators.required]],
      }
    );
  }

  ngOnInit() {
  }

  submit(): void {
    this.authenticationService.login(this.loginForm.value)
      .subscribe((data) => {
        console.info(data);
      });
  }

}
