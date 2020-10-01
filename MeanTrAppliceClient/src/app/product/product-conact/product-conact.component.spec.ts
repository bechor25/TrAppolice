import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductConactComponent } from './product-conact.component';

describe('ProductConactComponent', () => {
  let component: ProductConactComponent;
  let fixture: ComponentFixture<ProductConactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductConactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductConactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
