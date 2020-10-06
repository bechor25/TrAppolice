import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { TotalSim } from '../models/totalSim';
import { MatSort, Sort } from '@angular/material/sort';
import {  MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { TotalUser } from '../models/totalUser';
import { ProductService } from '../services/product.service';



@Component({
  selector: 'app-product-list-server',
  templateUrl: './product-list-server.component.html',
  styleUrls: ['./product-list-server.component.scss']
})
export class ProductListServerComponent implements OnInit {

  displayedColumns = ['Rank_first_last_name_officer','total'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<TotalUser>;
  desserts : TotalUser[]=[];
  sortedData : TotalUser[]=[];
  total: TotalUser[]=[];


  dataSourceSim: MatTableDataSource<TotalSim>;
  dessertsSim : TotalSim[]=[];
  sortedDataSim : TotalSim[]=[];
  totalSim: TotalSim []=[];
  @ViewChild(MatPaginator) paginatorSim: MatPaginator;
  @ViewChild(MatSort) sortSim: MatSort;
  displayedColumnSim = ['Offense_Number','total'];


  constructor(
    private productService: ProductService,
    private router: Router
  ) {
    this.sortedData = this.desserts.slice();
    this.sortedDataSim = this.dessertsSim.slice();
  }

  ngOnInit(): void {
    this.getCountProducts();
    this.getCountSim();

  }

  getCountSim() {
    this.productService.getCountSim().subscribe(
      result => {
        this.totalSim = result.total;
        this.dessertsSim = result.total;
        this.sortedDataSim= result.total;
        this.dataSourceSim = new MatTableDataSource(result.total);
        this.dataSourceSim.paginator = this.paginatorSim;
        this.dataSourceSim.sort = this.sortSim;
      }
    )
  }

  getCountProducts() {
    this.productService.getCountProducts().subscribe(
      result => {
        this.total = result.total;
        this.desserts = result.total;
        this.sortedData= result.total;
        this.dataSource = new MatTableDataSource(result.total);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )
  }



}
