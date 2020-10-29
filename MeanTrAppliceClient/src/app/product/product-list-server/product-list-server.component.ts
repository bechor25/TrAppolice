import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { TotalSim } from '../models/totalSim';
import { MatSort, Sort } from '@angular/material/sort';
import {  MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { TotalUser } from '../models/totalUser';
import { ProductService } from '../services/product.service';
import { TotalMoney } from '../models/totalMoney'


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
  displayedColumnSim = ['Offense_Number','total','Offense_Description'];


  dataSourceMoney: MatTableDataSource<TotalMoney>;
  dessertsMoney : TotalMoney[]=[];
  sortedDataMoney : TotalMoney[]=[];
  totalMoney: TotalMoney []=[];
  @ViewChild(MatPaginator) paginatorMoney: MatPaginator;
  @ViewChild(MatSort) sortMoney: MatSort;
  displayedColumnMoney = ['Report_Amount','total'];


  constructor(
    private productService: ProductService,
    private router: Router
  ) {
    this.sortedData = this.desserts.slice();
    this.sortedDataSim = this.dessertsSim.slice();
    this.sortedDataMoney = this.dessertsMoney.slice();
  }

  ngOnInit(): void {
    this.getCountProducts();
    this.getCountSim();
this.getCountMoney();
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

  getCountMoney() {
    this.productService.getCountMoney().subscribe(
      result => {
        this.totalMoney = result.total;
        this.dessertsMoney = result.total;
        this.sortedDataMoney= result.total;
        this.dataSourceMoney = new MatTableDataSource(result.total);
        this.dataSourceMoney.paginator = this.paginatorMoney;
        this.dataSourceMoney.sort = this.sortMoney;
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
