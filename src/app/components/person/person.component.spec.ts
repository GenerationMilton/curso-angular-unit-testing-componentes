import { ComponentFixture, TestBed } from '@angular/core/testing';

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
  //another test
  it('should hava <p> with "Soy un parrafo"',()=>{
    const personElement: HTMLElement= fixture.nativeElement;
    const p = personElement.querySelector('p');
    expect(p?.textContent).toEqual('Soy un parrafo');
  });
});
