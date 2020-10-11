import { Component, OnInit,ViewChild  } from '@angular/core';
import { ProductService } from '../services/product.service';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { MatSort, Sort } from '@angular/material/sort';
import {  MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SweetAlertOptions } from 'sweetalert2';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  displayedColumns = ['Remove','rank','id_rank','first_name','last_name'];
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

  deleteUser(id_rank: number) {
      this.productService.deleteUser(id_rank).subscribe(
        result => {
          console.log(result);
          if ( ! result.error) {
            Swal.fire({
              title: 'האם אתה בטוח שברצונך למחוק שוטר זה מהמערכת?',
              showDenyButton: true,
              showCancelButton: true,
              confirmButtonText: `מחיקה`,
              denyButtonText: `חזור לרשימה`,
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                Swal.fire('השוטר נמחק מהמערכת הבצלחה', '', 'success')
              } else if (result.isDenied) {
                Swal.fire('השוטר לא נמחק מהמערכת', '', 'info')
              }
              this.rows = this.rows.filter(item => item.id_rank != id_rank);
              this.router.navigateByUrl('/backend/cms');
            })

          } else {
            alert('משהו השתבש במחיקה');
          }
        }
      )
    }




  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;

  }
}


