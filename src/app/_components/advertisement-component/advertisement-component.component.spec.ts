import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementComponentComponent } from './advertisement-component.component';

describe('AdvertisementComponentComponent', () => {
  let component: AdvertisementComponentComponent;
  let fixture: ComponentFixture<AdvertisementComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisementComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
