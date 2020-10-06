import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PdfViewerComponent } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  pdfQuery = '';
  @ViewChild(PdfViewerComponent) private pdfComponent: PdfViewerComponent;

  src =
  "https://raw.githubusercontent.com/bechor25/TrAppolice/d8f2121a2e8b399a37be309927e563814ed6f577/%D7%94%D7%A0%D7%97%D7%99%D7%99%D7%AA%20%D7%9E%D7%A0%D7%94%D7%9C%D7%AA%20%D7%A7%D7%95%D7%A8%D7%95%D7%A0%D7%94%20%D7%9E%D7%A1'%2030%20-%20%D7%94%D7%92%D7%91%D7%9C%D7%AA%20%D7%94%D7%A9%D7%94%D7%99%D7%99%D7%94%20%D7%91%D7%9E%D7%A8%D7%97%D7%91%20%D7%94%D7%A6%D7%99%D7%91%D7%95%D7%A8%D7%99%20%D7%95%D7%94%D7%92%D7%91%D7%9C%D7%AA%20%D7%A4%D7%A2%D7%99%D7%9C%D7%95%D7%AA%20-%20....pdf";

  constructor() { }

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
