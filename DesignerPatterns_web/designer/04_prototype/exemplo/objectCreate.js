const cachorro = {
  latir() {
    console.log(` Uau! `);
  }
};

const pet1 = Objeto.criar(cachorro); 

animal de estimação1.casca(); // Uau! 
console.log(" Propriedades diretas em pet1: ", Object.keys(pet1));
console.log(" Propriedades no protótipo do pet1: ", Object.keys(pet1.__ proto__)); 