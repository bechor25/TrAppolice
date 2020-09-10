
import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators, FormsModule, FormControl,NgForm } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  isLinear = false;
  productForm: FormGroup;
  model: Product;
  title: string;
  productId: number;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = "טופס הנפקת דוחות";
    this.createForm();

    // edit product
    this.productId = +this.route.snapshot.paramMap.get('id');
    if(this.productId) {
      this.getProduct();
    }
  }

  get f() { return this.productForm.controls; }

  goBack() {
    this.router.navigateByUrl('/backend/product');
  }

  createForm() {
    this.productForm = this.fb.group({
      Whom: ['', Validators.required],
      DrivingLicenseNumber: ['',Validators.required],
      ID_Number: [''],
      First_Name: [''],
      Last_Name: [''],
            City: [''],
            Street: [''],
            Home_Number: [''],
            Phone_Number: [''],
            EMail: [''],
            Plate_Type:[''],
            Car_Manufacturer:[''],
            Car_Type: [''],
            Car_Color: [''],
            Date: [''],
            Hour: [''],
            Offense_Place: [''],
            Offense_Place_Description: [''],
            Offense_Description: [''],
            Points:[''],
            Offense_Number: [''],
            Speedometer_Type: [''],
            Report_Amount: [''],
            Report_Amount_inWords: [''],
            Last_Date_To_Pay: [''],
            First_Witness_ID:[''],
            First_Witness_Full_Name: [''],
            Second_Witness_ID: [''],
            Second_Witness_Full_Name: [''],
            Full_Description: [''],
            Kmh: [''],
            Distance: [''],
            GivenNotGiven_Continuation_Of_The_Case:[''],
            Citizen_Testimony: [''],
            Citizen_Signture:[''],
            Citizen_Date_Confirmed: [''],
            Car_Number: [''],
            Rank_first_last_name_officer: [''],
      is_active: [1]
    })
  }

  onSubmit() {
    this.model = this.productForm.value;
    if (this.productId) {
      this.updateProduct();
    } else {
      this.addProduct();
    }
  }

  addProduct() {
    this.model = this.productForm.value;
    this.productService.addProduct(this.model).subscribe(
      result => {
        console.log(result);
        if ( ! result.error) {
          alert(`הדוח נשלח בהצלחה`);
          this.router.navigateByUrl('/backend/cms');
        } else {
          alert('הדוח לא הונפק בהצלחה');
        }
      }
    )
  }

  updateProduct() {
    this.model = this.productForm.value;
    this.model.id = this.productId;
    this.productService.updateProduct(this.model).subscribe(
      result => {
        console.log(result);
        if ( ! result.error) {
          this.router.navigateByUrl('/backend/cms');
        } else {
          alert('הדוח לא עודכן בהצלחה');
        }
      }
    )
  }

  getProduct() {
    this.productService.getProduct(this.productId).subscribe(
      result => {
        console.log(result);
        this.productForm.patchValue(result.data)
      }
    )
  }

}
