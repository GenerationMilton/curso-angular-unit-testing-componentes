import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component, DebugElement } from '@angular/core';
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
    //const expectMsg=`Mi altura es ${component.person.heigth}`;
    const personDebug:DebugElement= fixture.debugElement;
    const pDebug:DebugElement=personDebug.query(By.css('p'));
    const pElement: HTMLElement= pDebug.nativeElement;
    //Act
    fixture.detectChanges();
    //Assert
    expect(pElement?.textContent).toContain(component.person.heigth);
  });

  it('should display a text with IMC when call calcIMC', () => {
    // Arrange
    const expectedMsg = 'overweigth level 3';
    component.person = new Person('Juan', 'Perez', 30, 120, 1.65); // overweight level 3
    const button = fixture.debugElement.query(By.css('button.btn-imc')).nativeElement;
    // Act
    component.calcIMC();
    fixture.detectChanges();
    // Assert
    expect(button.textContent).toContain(expectedMsg);
  });

  it('should display a text with IMC when do click', () => {
    // Arrange
    const expectedMsg = 'overweigth level 3';
    component.person = new Person('Juan', 'Perez', 30, 120, 1.65); // overweight level 3
    const buttonDe = fixture.debugElement.query(By.css('button.btn-imc'));
    const buttonEl = buttonDe.nativeElement;
    // Act
    buttonDe.triggerEventHandler('click', null);
    fixture.detectChanges();
    // Assert
    expect(buttonEl.textContent).toContain(expectedMsg);
  });

  it('should raise selected event when do click', () => {
    // Arrange
    const expectedPerson = new Person('Juan', 'Perez', 30, 120, 1.65);
    component.person = expectedPerson;
    const buttonDe = fixture.debugElement.query(By.css('button.btn-choose'));
    let selectedPerson: Person | undefined;
    component.onSelected
    .subscribe(person => selectedPerson = person);
    // Act
    buttonDe.triggerEventHandler('click', null);
    fixture.detectChanges();
    // Assert
    expect(selectedPerson).toEqual(expectedPerson);
  });


});

@Component({
  template: `<app-person [person]="person"(onSelected)="onSelected($event)"></app-person>`
})
class HostComponent{
  person = new Person('Santi','Molina',12,40,1.5);
  selectedPerson: Person|undefined;

  onSelected(person:Person){
    this.selectedPerson=person;
  }
}

fdescribe('PersonComponent from HostComponent', () => {
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostComponent, PersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display person name', () => {
    // Arrange
    const expectName = component.person.name;
    const h3De = fixture.debugElement.query(By.css('app-person h3'));
    const h3El = h3De.nativeElement;
    // Act
    fixture.detectChanges();
    // Assert
    expect(h3El.textContent).toContain(expectName);
  });

  it('should raise selected event when do click', () => {
    // Arrange
    const btnDe = fixture.debugElement.query(By.css('app-person .btn-choose'));
    // Act
    btnDe.triggerEventHandler('click', null);
    fixture.detectChanges();
    // Assert
    expect(component.selectedPerson).toEqual(component.person);
  })
})
