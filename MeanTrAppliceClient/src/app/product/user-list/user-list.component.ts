import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { Sort } from '@angular/material/sort';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  rows: User[] = [];
  desserts :User[]= [];
  sortedData :User[] = [];


  constructor( private productService: ProductService,
    private router: Router) {
      this.sortedData = this.desserts.slice();
    }


  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.productService.getUser().subscribe(
      result => {
        this.desserts = result;
        this.sortedData= result;
      }
    )
  }

  sortData(sort: Sort) {
    const data = this.desserts.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'username': return compare(a.username, b.username, isAsc);
        case 'first_name': return compare(a.first_name, b.first_name, isAsc);
        case 'last_name': return compare(a.last_name, b.last_name, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: number | string | Date, b: number | string | Date, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


