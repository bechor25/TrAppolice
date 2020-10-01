import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PdfViewerComponent } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pdfQuery = '';
  @ViewChild(PdfViewerComponent) private pdfComponent: PdfViewerComponent;

  src =
  "https://raw.githubusercontent.com/bechor25/TrAppolice/2b89a224fd6e76aea276f831137fb1c456f74550/hana_v9.35.93s.pdf";


  constructor(


  ) { }

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
