import { NgxMatFileInputModule} from '@angular-material-components/file-input';
import { Component, OnInit ,ViewChild,AfterViewInit} from '@angular/core';
import SignaturePad from 'signature_pad';
import {  FormBuilder, FormGroup, Validators, FormsModule, FormControl,NgForm } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { SweetAlertOptions } from 'sweetalert2';
import Swal from 'sweetalert2'
declare const L: any;
import { ipInfo } from '../models/ipinfo';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  //photo-1
  url;
  format;
  url1;
  format1;
  url2;
  format2;
   //מיקום
   lat:any;
   lng:any;
   location:object;
   title:any;

  @ViewChild('sPad', {static: true}) signaturePadElement;
alertOpt: SweetAlertOptions = {};
  signaturePad: any;
  isLinear =false;
  productForm: FormGroup;
  model: Product;

  photoOen:any;
  photoTwo:any;
  photoThree:any;
  dataURL:any;
  productId: number;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,


  ) { }


  ngOnInit() {
         //מיקום
         if (!navigator.geolocation) {
          console.log('location is not supported');
        }
        navigator.geolocation.getCurrentPosition((position) => {
          const coords = position.coords;
          const latLong = [coords.latitude, coords.longitude];
          console.log(
            `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
          );
          let mymap = L.map('map').setView(latLong, 13);

          L.tileLayer(
            'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3VicmF0MDA3IiwiYSI6ImNrYjNyMjJxYjBibnIyem55d2NhcTdzM2IifQ.-NnMzrAAlykYciP4RP9zYQ',
            {
              attribution:
                '.TrAppolice 2020 - כל הזכויות שמורות &copy; ',
              maxZoom: 18,
              id: 'mapbox/streets-v11',
              tileSize: 512,
              zoomOffset: -1,
              accessToken: 'your.mapbox.access.token',
            }
          ).addTo(mymap);

          let marker = L.marker(latLong).addTo(mymap);

          marker.bindPopup('<b>המיקום שלך</b>').openPopup();

          let popup = L.popup()
            .setLatLng(latLong)
            .setContent('מיקום')
            .openOn(mymap);
        });
        this.watchPosition();

    this.createForm();
    this.signaturePad = this.signaturePadElement.nativeElement;
    this.productId = +this.route.snapshot.paramMap.get('id');
    if(this.productId) {
      this.getProduct();
    }
  }

  watchPosition() {
    let desLat = 0;
    let desLon = 0;
    let id = navigator.geolocation.watchPosition(

      (position) => {
        this.lat= position.coords.latitude;
        this.lng=position.coords.longitude;
        console.log(
          `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
        );
        if (position.coords.latitude === desLat) {
          navigator.geolocation.clearWatch(id);
        }
      },
      (err) => {
        console.log(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }
  ngAfterViewInit(): void {
    this.signaturePad = new SignaturePad(this.signaturePadElement.nativeElement);
  }

  //download signature
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
//photo-1
  onSelectFile(event) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      if(file.type.indexOf('image')> -1){
        this.format = 'image';
      } else if(file.type.indexOf('video')> -1){
        this.format = 'video';
      }
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result;
      }
    }
  }

    //photo-2
    onSelectFile1(event) {
      const file = event.target.files && event.target.files[0];
      if (file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        if(file.type.indexOf('image')> -1){
          this.format1 = 'image';
        } else if(file.type.indexOf('video')> -1){
          this.format1 = 'video';
        }
        reader.onload = (event) => {
          this.url1 = (<FileReader>event.target).result;
        }
      }
    }

    //photo-3
    onSelectFile2(event) {
      const file = event.target.files && event.target.files[0];
      if (file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        if(file.type.indexOf('image')> -1){
          this.format2 = 'image';
        } else if(file.type.indexOf('video')> -1){
          this.format2 = 'video';
        }
        reader.onload = (event) => {
          this.url2 = (<FileReader>event.target).result;
        }
      }
    }

  dataURLToBlob(dataURL) {
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

//controls form
  get f() { return this.productForm.controls; }
//navigat page
  goBack() {
    this.router.navigateByUrl('/backend/cms');
  }
//array report
  createForm() {
    this.productForm = this.fb.group({
      Whom: ['', Validators.required],
      DrivingLicenseNumber: ['',Validators.required],
      ID_Number: [''],
      First_Name: [''],
      Last_Name: [''],
            City: [''],
            Street: [''],
            Home_Number: [''],
            Phone_Number: [''],
            EMail: [''],
            Plate_Type:[''],
            Car_Manufacturer:[''],
            Car_Type: [''],
            Car_Color: [''],
            Date: [''],
            Hour: [''],
            Offense_Place: [''],
            Offense_Place_Description: [''],
            Offense_Description: [''],
            Points:[''],
            Offense_Number: [''],
            Speedometer_Type: [''],
            Report_Amount: [''],
            Report_Amount_inWords: [''],
            Last_Date_To_Pay: [''],
            First_Witness_ID:[''],
            First_Witness_Full_Name: [''],
            Second_Witness_ID: [''],
            Second_Witness_Full_Name: [''],
            Full_Description: [''],
            Kmh: [''],
            Distance: [''],
            GivenNotGiven_Continuation_Of_The_Case:[''],
            Citizen_Testimony: [''],
            Citizen_Signture:[''],
            Citizen_Date_Confirmed: [''],
            Car_Number: [''],
            Rank_first_last_name_officer: [''],
            photo_1: [''],
            photo_2: [''],
            photo_3: [''],
            lat1:[''],
            lng2:[''],
      is_active: [1]
    })
  }
//send array
onSubmit() {
    this.dataURL = this.signaturePad.toDataURL();
    this.model = this.productForm.value;
    if (this.productId) {
      this.updateProduct();
    } else {
      this.addProduct();
    }
  }
//send
  addProduct() {
    this.productForm.value.Citizen_Signture = this.dataURL;
    this.productForm.value.photo_1 = this.url;
    this.productForm.value.photo_2 = this.url1;
    this.productForm.value.photo_3 = this.url2;
    this.productForm.value.lat1 = this.lat;
    this.productForm.value.lng2 = this.lng;
    this.model = this.productForm.value;
    this.productService.addProduct(this.model).subscribe(
      result => {
        console.log(result);
        if ( ! result.error) {
          Swal.fire({
            title: 'האם להנפיק דוח זה?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `הנפקה`,
            denyButtonText: `חזור לדוח`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('הופק', '', 'success')
              this.router.navigateByUrl('/backend/cms');
            } else if (result.isDenied) {
              Swal.fire('הדוח לא נשמר בהצלחה', '', 'info')
            }
          })

        } else {
          alert('הדוח לא הונפק בהצלחה');
        }
      }
    )
  }

  updateProduct() {
    this.model = this.productForm.value;
    this.model.id = this.productId;
    this.productService.updateProduct(this.model).subscribe(
      result => {
        console.log(result);
        if ( ! result.error) {
          this.router.navigateByUrl('/backend/cms');
        } else {
          alert('הדוח לא עודכן בהצלחה');
        }
      }
    )
  }

  getProduct() {
    this.productService.getProduct(this.productId).subscribe(
      result => {
        console.log(result);
        this.productForm.patchValue(result.data)
      }
    )
  }

}
