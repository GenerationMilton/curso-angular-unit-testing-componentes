import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Person } from 'src/app/models/person.model';
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
    component.person= new Person('Milton','Munoz',28,89,1.4);//Instanciar person
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //test for person
  it('should the name be "Milton"', ()=>{
    component.person= new Person('Milton','Munoz',28,89,1.4);//Instanciar person
    expect(component.person.name).toEqual('Milton');
  });

  //another test h3
  it('should have <h3> with "Hola, {person.name}"',()=>{

    //Arrange
    component.person= new Person('Valentina','Munoz',28,89,1.4);//Instanciar person
    const expectMsg=`Hola, ${component.person.name}`;
    const personDebug:DebugElement= fixture.debugElement;
    const h3Debug:DebugElement=personDebug.query(By.css('h3'));
    const h3: HTMLElement= h3Debug.nativeElement;
    //Act
    fixture.detectChanges();
    //Assert
    expect(h3?.textContent).toEqual(expectMsg);
  });

  //another test
  it('should have <p> with "Mi altura es {person.height}"',()=>{
    //Arrange
    component.person= new Person('Valentina','Munoz',28,89,1.4);//Instanciar person
    const expectMsg=`Mi altura es ${component.person.heigth}`;
    const personDebug:DebugElement= fixture.debugElement;
    const pDebug:DebugElement=personDebug.query(By.css('p'));
    const pElement: HTMLElement= pDebug.nativeElement;
    //Act
    fixture.detectChanges();
    //Assert
    expect(pElement?.textContent).toContain(expectMsg);
  });


});
