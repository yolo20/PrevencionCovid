import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreguntasfrecuentesPage } from './preguntasfrecuentes.page';

describe('PreguntasfrecuentesPage', () => {
  let component: PreguntasfrecuentesPage;
  let fixture: ComponentFixture<PreguntasfrecuentesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreguntasfrecuentesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreguntasfrecuentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
