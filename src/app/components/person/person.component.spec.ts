import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { PersonComponent } from './person.component';

fdescribe('PersonComponent', () => {
  let component: PersonComponent;
  //obtener instancia del componente
  let fixture: ComponentFixture<PersonComponent>;

  beforeEach(async () => {
    //modulo pequeño para pruebas
    await TestBed.configureTestingModule({
      declarations: [ PersonComponent ]
    })
    .compileComponents();
  });

  //no async
  beforeEach(() => {
    fixture = TestBed.createComponent(PersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); //ciclo de vida angular
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //another test h3
  it('should have <h3> with "Hola, PersonComponent"',()=>{
    const personDebug:DebugElement= fixture.debugElement;
    const h3Debug:DebugElement=personDebug.query(By.css('h3'));
    const h3: HTMLElement= h3Debug.nativeElement;

    expect(h3?.textContent).toEqual('Hola, PersonComponent');
  });

  //another test
  it('should have <p> with "Soy un parrafo"',()=>{
    const personDebug:DebugElement= fixture.debugElement;
    const pDebug:DebugElement=personDebug.query(By.css('p'));
    const pElement: HTMLElement= pDebug.nativeElement;

    expect(pElement?.textContent).toEqual('Soy un parrafo');
  });
});
