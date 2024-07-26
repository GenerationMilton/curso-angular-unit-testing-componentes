import { Person } from "./person.model";

describe('Tests for person',()=>{

  let person:Person;

  beforeEach(()=>{
    //instance of person
    person= new Person('Milton','Munoz',38,40,1.65);
  });

  it('attributes',()=>{
    expect(person.name).toEqual('Milton');
    expect(person.lastName).toEqual('Munoz');
    expect(person.age).toEqual(38);
  });

  describe('test for calcIMC', ()=>{
    //another test --down
    it('should return a string:down',()=>{
      //Arrange
      person.weigth =40;
      person.heigth=1.65;
      //Act
      const rta = person.calcIMC();
      //Assert
      expect(rta).toEqual('down');
    });
    //another test - normal
    it('should return a string:normal',()=>{
      //Arrange
      person.weigth =58;
      person.heigth=1.65;
      //Act
      const rta1 = person.calcIMC();
      //Assert
      expect(rta1).toEqual('normal');
    });
    //another test - overweigth
    it('should return a string:overweigth',()=>{
      //Arrange
      person.weigth =70;
      person.heigth=1.65;
      //Act
      const rta1 = person.calcIMC();
      //Assert
      expect(rta1).toEqual('overweigth');
    });
     //another test - overweigth level 1
     it('should return a string:overweigth level 1',()=>{
      //Arrange
      person.weigth =75;
      person.heigth=1.65;
      //Act
      const rta1 = person.calcIMC();
      //Assert
      expect(rta1).toEqual('overweigth level 1');
    });
     //another test - overweigth level 2
     it('should return a string:overweigth level 2',()=>{
      //Arrange
      person.weigth =85;
      person.heigth=1.65;
      //Act
      const rta1 = person.calcIMC();
      //Assert
      expect(rta1).toEqual('overweigth level 2');
    });
     //another test - overweigth level 3
     it('should return a string:overweigth level 3',()=>{
      //Arrange
      person.weigth =110;
      person.heigth=1.65;
      //Act
      const rta1 = person.calcIMC();
      //Assert
      expect(rta1).toEqual('overweigth level 3');
    });

  })

});
