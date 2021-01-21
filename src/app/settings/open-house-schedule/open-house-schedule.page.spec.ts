import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OpenHouseSchedulePage } from './open-house-schedule.page';

describe('OpenHouseSchedulePage', () => {
  let component: OpenHouseSchedulePage;
  let fixture: ComponentFixture<OpenHouseSchedulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenHouseSchedulePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OpenHouseSchedulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
