import { Component, OnInit ,ViewChild} from '@angular/core';
import contact  from '../models/contact.json';
import { MatSort, Sort } from '@angular/material/sort';
import {  MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.scss']
})
export class PhoneListComponent implements OnInit {
  displayedColumns = ['addres', 'tal'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public stationList:{addres:string, tal:string}[] = contact;
  dataSource: MatTableDataSource<Contact>;
  desserts :{tal:string, addres:string}[] = contact;
  sortedData :{ tal:string,addres:string}[] = contact;
  constructor(

  ) { this.sortedData = this.desserts.slice();}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.stationList);
    this.desserts = this.stationList;
        this.sortedData= this.stationList;
        this.dataSource.paginator =this.paginator;
        this.dataSource.sort = this.sort;

  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;

  }
}
