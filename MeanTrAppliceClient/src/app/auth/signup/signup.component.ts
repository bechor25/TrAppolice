
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { passwordMatchValidator } from '../../shared/validators/password-match';
import { AuthService } from '../services/auth.service';
import { SweetAlertOptions } from 'sweetalert2';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  model: User;
  title: string;
  isMessage: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.createForm();
    this.title = 'הכנסת שוטר חדש למערכת';
  }

  createForm() {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passconf: ['', Validators. required],
      first_name: ['', Validators.required],
      last_name: [''],
      authorization: ['', Validators.required],
      rank: ['', Validators.required],
      id_rank: ['', Validators.required],
    }, { validators: passwordMatchValidator })
  }

  get f() { return this.signupForm.controls }

  onSubmit() {
    this.model = this.signupForm.value;
    this.authService.signup(this.model).subscribe(
      result => {
        //console.log(result);
        if ( ! result.error) {
          Swal.fire({
            title: 'האם להכניס שוטר זה למערכת?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `הכנס`,
            denyButtonText: `חזור`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('השוטר הוכנס למערכת', '', 'success')
              this.router.navigateByUrl('/backend/cms');
            } else if (result.isDenied) {
              Swal.fire('השוטר לא הוכנס למערכת', '', 'info')
            }
          })

        }
        else{
          alert('הרשמה נכשלה נסה שנית');
        }
      }
    )
  }

}
