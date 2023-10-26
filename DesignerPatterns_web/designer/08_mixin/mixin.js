class Dog {
  constructor(name) {
    this.name = name;
  }
}
// criamos mixin
const dogFunctionality = {
  bark: () => console.log("Woof!"),
  wagTail: () => console.log("Wagging my tail!"),
  play: () => console.log("Playing!"),
};

/* 
Podemos adicionar o dogFunctionalitymixin ao Dogprotótipo com o 
Object.assignmétodo. Este método nos permite adicionar propriedades
ao objeto de destino : Dog.prototypeneste caso. Cada nova instância de
Dogterá acesso às propriedades de dogFunctionality, à medida que forem
adicionadas ao Dogprotótipo de !
*/
Object.assign(Dog.prototype, dogFunctionality);

const pet1 = new Dog("Daisy");

pet1.name; // Daisy
pet1.bark(); // Woof!
pet1.play(); // Playing!