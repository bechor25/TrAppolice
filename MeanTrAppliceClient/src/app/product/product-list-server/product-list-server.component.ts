import { Component, ElementRef, OnInit ,ViewChild} from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSort, Sort } from '@angular/material/sort';
import {  MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FormBuilder, FormGroup } from '@angular/forms';
import { jsPDF } from 'jspdf';





@Component({
  selector: 'app-product-list-server',
  templateUrl: './product-list-server.component.html',
  styleUrls: ['./product-list-server.component.css']
})
export class ProductListServerComponent implements OnInit {
  @ViewChild('htmlData') htmlData:ElementRef;

  USERS = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "email": "sincere@april.biz",
      "phone": "1-770-736-8031 x56442"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "email": "shanna@melissa.tv",
      "phone": "010-692-6593 x09125"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "email": "nathan@yesenia.net",
      "phone": "1-463-123-4447",
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "email": "julianne@kory.org",
      "phone": "493-170-9623 x156"
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "email": "lucio@annie.ca",
      "phone": "(254)954-1289"
    },
    {
      "id": 6,
      "name": "Mrs. Dennis",
      "email": "karley@jasper.info",
      "phone": "1-477-935-8478 x6430"
    }
  ];

  rows: Product[] = [];
  model: Product;
  productFormIDNumber: FormGroup;
  idSearch:number;

  @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;




  constructor(     private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.createFormIdNumber();
    this.getProductIdSearch(this.idSearch);
  }
  get fIdNumber() { return this.productFormIDNumber.controls; }

  createFormIdNumber() {
    this.productFormIDNumber = this.fb.group({
      idSearch: ['', ],


    })
  }
  onSubmitIdNumber() {
    this.model = this.productFormIDNumber.value;
    this.idSearch = this.fIdNumber.idSearch.value;

    this.getProductIdSearch(this.idSearch);

  }
/////pdf
  public openPDF():void {
    let DATA = this.htmlData.nativeElement;
    let doc = new jsPDF('p','pt', 'a4');
    doc.fromHTML(DATA.innerHTML,15,15);
    doc.output('dataurlnewwindow');
  }


  public downloadPDF():void {
    let DATA = this.htmlData.nativeElement;
    let doc = new jsPDF('p','pt', 'a4');

    let handleElement = {
      '#editor':function(element,renderer){
        return true;
      }
    };
    doc.fromHTML(DATA.innerHTML,15,15,{
      'width': 200,
      'elementHandlers': handleElement
    });

    doc.save('angular-demo.pdf');
  }

  getProductIdSearch(idSearch: number) {
    this.productService.getProductIdSearch(idSearch).subscribe(
      result => {
        this.rows = result;
        console.log("sucsses");

      }
    )
  }
}
