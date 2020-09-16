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
  productFormIDNumber: FormGroup;
  idSearch:number;


  constructor(     private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.createFormIdNumber();
    this.getProductIdSearch(this.idSearch);
  }
  get fIdNumber() { return this.productFormIDNumber.controls; }

  createFormIdNumber() {
    this.productFormIDNumber = this.fb.group({
      idSearch: ['', ],


    })
  }
  onSubmitIdNumber() {
    this.model = this.productFormIDNumber.value;
    this.idSearch = this.fIdNumber.idSearch.value;

    this.getProductIdSearch(this.idSearch);

  }
  getProductIdSearch(idSearch: number) {
    this.productService.getProductIdSearch(idSearch).subscribe(
      result => {
        this.rows = result;
        console.log("sucsses");

      }
    )
  }
}
