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





@Component({
  selector: 'app-product-list-server',
  templateUrl: './product-list-server.component.html',
  styleUrls: ['./product-list-server.component.css']
})
export class ProductListServerComponent implements OnInit {
  user:any;
  @ViewChild('sPad', {static: true}) signaturePadElement;
  signaturePad: any;

  constructor(     private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private authService:AuthService
    ) {
      this.user = this.authService.userValue;
    }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.signaturePad = new SignaturePad(this.signaturePadElement.nativeElement);
  }


  clear() {
    this.signaturePad.clear();
  }


  download(dataURL, filename) {
    if (navigator.userAgent.indexOf('Safari') > -1 && navigator.userAgent.indexOf('Chrome') === -1) {
      window.open(dataURL);
    } else {
      const blob = this.dataURLToBlob(dataURL);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;

      document.body.appendChild(a);
      a.click();

      window.URL.revokeObjectURL(url);
    }
  }

  dataURLToBlob(dataURL) {
    // Code taken from https://github.com/ebidel/filer.js
    const parts = dataURL.split(';base64,');
    const contentType = parts[0].split(':')[1];
    const raw = window.atob(parts[1]);
    const rawLength = raw.length;
    const uInt8Array = new Uint8Array(rawLength);
    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], { type: contentType });
  }

  savePNG() {
    if (this.signaturePad.isEmpty()) {
      alert('Please provide a signature first.');
    } else {
      const dataURL = this.signaturePad.toDataURL();
      this.download(dataURL, 'signature.png');
    }
  }


}
