
import { Component, OnInit ,ViewChild} from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { Router } from '@angular/router';
import { MatSort, Sort } from '@angular/material/sort';
import {  MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  displayedColumns = ['More_details','Rank_first_last_name_officer','ID_Number','Date'];
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<Product>;
  title: string;
  rows: Product[] = [];

  viewDiteilsReport:boolean=false;
  viewId:number=null;

  /* pagination */
  p: number = 1;
  limit: number = 5;
  total: number;

  constructor(
    private productService: ProductService,
    private router: Router
  ) {

   }

  ngOnInit() {
    this.title = 'פרטי דוחות';
    this.getProducts(this.p);
  }

  getProducts(p: number) {
    let offset = (p - 1) * this.limit;
    this.productService.getProducts(offset, this.limit).subscribe(
      result => {
        this.rows = result.data;
        this.total = result.total;
        this.dataSource = new MatTableDataSource(result.data);
        this.dataSource.sort = this.sort;

      }
    )
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;

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

}




