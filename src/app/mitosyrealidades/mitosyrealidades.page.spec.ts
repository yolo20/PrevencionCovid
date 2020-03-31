import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MitosyrealidadesPage } from './mitosyrealidades.page';

describe('MitosyrealidadesPage', () => {
  let component: MitosyrealidadesPage;
  let fixture: ComponentFixture<MitosyrealidadesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MitosyrealidadesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MitosyrealidadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
