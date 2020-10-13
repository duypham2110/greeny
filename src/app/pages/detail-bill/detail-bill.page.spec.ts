import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailBillPage } from './detail-bill.page';

describe('DetailBillPage', () => {
  let component: DetailBillPage;
  let fixture: ComponentFixture<DetailBillPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailBillPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailBillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
