import { Component, ElementRef, OnInit ,ViewChild,AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';


import { jsPDF } from 'jspdf';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
declare var jQuery: any;


@Component({
  selector: 'app-product-list-server',
  templateUrl: './product-list-server.component.html',
  styleUrls: ['./product-list-server.component.scss']
})
export class ProductListServerComponent implements OnInit {
  title = 'כמות דוחות לפי שוטרים';
  type = 'ColumnChart';


  columnNames = ['שמות שוטרים'];
  options = {
  };
  width = 550;
  height = 400;

  dataTableData:any;
  total: any;
  totalSim:any;
  rows: Product[] = [];
  constructor(
    private productService: ProductService,
    private router: Router
    ) {

    }

  ngOnInit(): void {
    this.getCountProducts();
    this.getCountSim();
  }

  getCountSim() {
    this.productService.getCountSim().subscribe(
      result => {
        this.totalSim = result.total;
      }
    )
  }

  getCountProducts() {
    this.productService.getCountProducts().subscribe(
      result => {
        this.total = result.total;

        this.dataTableData = ([
          ['Mushrooms', 3],
          ['Onions', 1],
          ['Olives', 1],
          ['Zucchini', 1],
          ['Pepperoni', 2]
        ])

      }
    )
  }



}
