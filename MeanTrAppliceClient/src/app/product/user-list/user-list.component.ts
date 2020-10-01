import { Component, OnInit,ViewChild  } from '@angular/core';
import { ProductService } from '../services/product.service';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { MatSort, Sort } from '@angular/material/sort';
import {  MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  displayedColumns = ['rank','first_name','last_name'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<User>;

  rows: User[] = [];
  desserts :User[]= [];
  sortedData :User[] = [];



  constructor( private productService: ProductService,
    private router: Router) {
      const rows: User[] = [];
      this.sortedData = this.desserts.slice();

    }


  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.productService.getUser().subscribe(
      result => {
        this.rows=result;
        this.desserts = result;
        this.sortedData= result;
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      }
    )
  }





  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;

  }
}


