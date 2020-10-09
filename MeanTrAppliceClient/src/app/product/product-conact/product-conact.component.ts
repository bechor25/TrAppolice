import { Component, OnInit } from '@angular/core';
import { Case } from '../models/case';
import {  FormBuilder, FormGroup, Validators, FormsModule, FormControl } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SweetAlertOptions } from 'sweetalert2';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-product-conact',
  templateUrl: './product-conact.component.html',
  styleUrls: ['./product-conact.component.scss']
})
export class ProductConactComponent implements OnInit {
  alertOpt: SweetAlertOptions = {};
  contactForm: FormGroup;
  model: Case;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

get f() { return this.contactForm.controls; }

  createForm() {
    this.contactForm = this.fb.group({
      Type_Contact: ['',],
      description: ['',],
      Contact_email: [''],

    })
  }

  onSubmit() {
 this.model = this.contactForm.value;
 this.addContact();
}

addContact() {
  this.model = this.contactForm.value;
  this.productService.addContact(this.model).subscribe(
    result => {
      console.log(result);
      Swal.fire({
        title: 'האם לשלוח פנייה?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: `שלח`,
        denyButtonText: `חזור לפנייה`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('נשלח', '', 'success')
          this.router.navigateByUrl('/backend/cms');
        } else if (result.isDenied) {
          Swal.fire('הפנייה לא נשלחה בהצלחה', '', 'info')
        }
      })

    }
  )
}

}
