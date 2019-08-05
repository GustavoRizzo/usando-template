import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleClassicoComponent } from './controle-classico.component';

describe('ControleClassicoComponent', () => {
  let component: ControleClassicoComponent;
  let fixture: ComponentFixture<ControleClassicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControleClassicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleClassicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
