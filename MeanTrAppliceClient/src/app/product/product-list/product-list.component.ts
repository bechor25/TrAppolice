
import { Component, OnInit ,ViewChild} from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSort, Sort } from '@angular/material/sort';
import {  MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  params1:string;
  productForm: FormGroup;
  rows: Product[] = [];

  viewDiteilsReport:boolean=false;
  viewId:number=null;
  model: Product;

  productFormDate: FormGroup;
  date2:number;
  date1:number;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {

   }

  ngOnInit() {
    this.createForm();
    this.title = 'פרטי דוחות';
   this.getProductName(this.params1);
   this.createFormDate();
   this.getProductDate(this.date1,this.date2);
  }
  get f() { return this.productForm.controls; }
  get fDate() { return this.productFormDate.controls; }

  createFormDate() {
    this.productFormDate = this.fb.group({
      date1: ['', ],
      date2: ['', ],

    })
  }
  createForm() {
    this.productForm = this.fb.group({
      Rank_first_last_name_officer: ['', ],

    })
  }

  onSubmitDate() {
    this.model = this.productFormDate.value;
    this.date1 = this.fDate.date1.value;
    this.date2 = this.fDate.date2.value;
    this.getProductDate(this.date1,this.date2);

  }
  onSubmit() {
    this.model = this.productForm.value;
    this.params1 = this.f.Rank_first_last_name_officer.value;
    this.getProductName(this.params1);
  }


  getProductDate(date1: number,date2:number) {
    this.productService.getProductDate(date1,date2).subscribe(
      result => {
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.sort = this.sort;
        this.rows = result;
        console.log("sucsses");

      }
    )
  }
  getProductName(params1: string) {
    this.productService.getProductName(params1).subscribe(
      result => {
        this.rows = result;
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.sort = this.sort;
        console.log("sucsses");

      }
    )
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;

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




