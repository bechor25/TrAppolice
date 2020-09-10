import { Component, OnInit ,ViewChild} from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { Router } from '@angular/router';
import { MatSort, Sort } from '@angular/material/sort';
import {  MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-product-list-server',
  templateUrl: './product-list-server.component.html',
  styleUrls: ['./product-list-server.component.css']
})
export class ProductListServerComponent implements OnInit {
  rows: Product[] = [];
  name:string;
  First_Name:string='רפאל';
  constructor( private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductDate();
  }

  getProductDate() {
    this.productService.getProductDate().subscribe(
      result => {
        this.rows = result;
      }
    )
  }


}
