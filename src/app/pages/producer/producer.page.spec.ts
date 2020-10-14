import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProducerPage } from './producer.page';

describe('ProducerPage', () => {
  let component: ProducerPage;
  let fixture: ComponentFixture<ProducerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProducerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
