import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListServerComponent } from './product-list-server.component';

describe('ProductListServerComponent', () => {
  let component: ProductListServerComponent;
  let fixture: ComponentFixture<ProductListServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
