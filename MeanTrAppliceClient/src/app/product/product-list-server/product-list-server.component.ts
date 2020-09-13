import { Component, OnInit ,ViewChild} from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSort, Sort } from '@angular/material/sort';
import {  MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-list-server',
  templateUrl: './product-list-server.component.html',
  styleUrls: ['./product-list-server.component.css']
})
export class ProductListServerComponent implements OnInit {
  rows: Product[] = [];
  model: Product;
  productFormDate: FormGroup;
  date2:number;
  date1:number;


  constructor(     private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.createFormDate();
    this.getProductDate(this.date1,this.date2);
  }
  get fDate() { return this.productFormDate.controls; }

  createFormDate() {
    this.productFormDate = this.fb.group({
      date1: ['', ],
      date2: ['', ],

    })
  }
  onSubmitDate() {
    this.model = this.productFormDate.value;
    this.date1 = this.fDate.date1.value;
    this.date2 = this.fDate.date2.value;
    this.getProductDate(this.date1,this.date2);

  }
  getProductDate(date1: number,date2:number) {
    this.productService.getProductDate(date1,date2).subscribe(
      result => {
        this.rows = result;
        console.log("sucsses");

      }
    )
  }
}
