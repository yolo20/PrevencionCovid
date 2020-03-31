import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LineasdeemergenciaPage } from './lineasdeemergencia.page';

describe('LineasdeemergenciaPage', () => {
  let component: LineasdeemergenciaPage;
  let fixture: ComponentFixture<LineasdeemergenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineasdeemergenciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LineasdeemergenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
