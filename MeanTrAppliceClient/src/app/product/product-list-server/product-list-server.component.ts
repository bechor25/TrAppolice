import { Component, ElementRef, OnInit ,ViewChild,AfterViewInit} from '@angular/core';
import SignaturePad from 'signature_pad';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSort, Sort } from '@angular/material/sort';
import {  MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FormBuilder, FormGroup } from '@angular/forms';
import { jsPDF } from 'jspdf';
import { User } from 'src/app/auth/models/user';
import { AuthService } from 'src/app/auth/services/auth.service';
import { PdfViewerComponent , PDFProgressData,
  PDFDocumentProxy,
  PDFSource} from 'ng2-pdf-viewer';






@Component({
  selector: 'app-product-list-server',
  templateUrl: './product-list-server.component.html',
  styleUrls: ['./product-list-server.component.css']
})
export class ProductListServerComponent implements OnInit {

  pdfQuery = '';
  @ViewChild(PdfViewerComponent) private pdfComponent: PdfViewerComponent;

  src =
  "https://raw.githubusercontent.com/bechor25/TrAppolice/2b89a224fd6e76aea276f831137fb1c456f74550/hana_v9.35.93s.pdf";
  constructor(     private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private authService:AuthService
    ) {

    }

  ngOnInit(): void {

  }

  searchQueryChanged(newQuery: string) {
    if (newQuery !== this.pdfQuery) {
      this.pdfQuery = newQuery;
      this.pdfComponent.pdfFindController.executeCommand('find', {
        query: this.pdfQuery,
        highlightAll: true
      });
    } else {
      this.pdfComponent.pdfFindController.executeCommand('findagain', {
        query: this.pdfQuery,
        highlightAll: true
      });
    }
  }






}
