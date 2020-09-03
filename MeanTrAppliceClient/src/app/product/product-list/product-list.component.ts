import { Sort } from '@angular/material/sort';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  title: string;
  rows: Product[] = [];
  desserts :Product[]= [];
  sortedData :Product[] = [];
  viewDiteilsReport:boolean=false;
  viewId:number=null;

  /* pagination */
  p: number = 1;
  limit: number = 5;
  total: number;

  constructor(
    private productService: ProductService,
    private router: Router
  ) {  this.sortedData = this.desserts.slice();}

  ngOnInit() {
    this.title = 'פרטי דוחות';
    this.getProducts(this.p);
  }

  getProducts(p: number) {
    let offset = (p - 1) * this.limit;
    this.productService.getProducts(offset, this.limit).subscribe(
      result => {
        this.desserts = result.data;
        this.sortedData = result.data;
        this.total = result.total;

      }
    )
  }

  getPage(pageNo: number) {
    this.p = pageNo;
    this.getProducts(this.p);
  }


  deleteProduct(id: number) {
    if(confirm('?האם אתה בטוח במחיקת הדוח')) {
      this.productService.deleteProduct(id).subscribe(
        result => {
          console.log(result);
          if ( ! result.error) {
            this.rows = this.rows.filter(item => item.id != id)
          } else {
            alert('משהו השתבש במחיקה');
          }
        }
      )
    }
  }
  //sort
  sortData(sort: Sort) {

    const data = this.desserts.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'First_Name': return compare(a.First_Name, b.First_Name, isAsc);
        case 'ID_Number': return compare(a.ID_Number, b.ID_Number, isAsc);
        case 'DrivingLicenseNumber': return compare(a.DrivingLicenseNumber, b.DrivingLicenseNumber, isAsc);
        case 'Whom': return compare(a.Whom, b.Whom, isAsc);
        case 'id': return compare(a.id, b.id, isAsc);

        default: return 0;
      }
    });
  }
}
  function compare(a: number | string | Date, b: number | string | Date, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  } //sort




