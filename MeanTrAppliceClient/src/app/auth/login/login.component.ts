
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MessageService } from 'src/app/services/message.service';
import { SweetAlertOptions } from 'sweetalert2';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading = false;
  loginForm: FormGroup;
  title: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService
  ) {
    if (this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/backend/dashboard');
    }
  }

  ngOnInit() {
    this.title = 'התחברות כמנהל';
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    })
  }
  get controlsLogin() { return this.loginForm.controls; }
  onSubmit() {
    this.loading=true;
    this.authService.login({
      username: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value
    }).subscribe(
      result => {
        if (result) {

          this.messageService.clear();
          this.router.navigateByUrl('/backend/cms');
        }
      }
    )
  }
forGot(){
  Swal.fire({
    title: '<strong><u>שוטר יקר!</u> במידה ושכחת סיסמתך</strong>',
    icon: 'info',
    html:
      'אנא צור קשר עם<b> קצין המחשוב ביחידה</b> : ' +
      '<a href="tel:0542160685">054-2160685</a> '
    ,
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> ',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText:
      '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: 'Thumbs down'
  })

}

}

