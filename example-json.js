var animal = '{"name" : "Tommy"}';
var animalObject = JSON.parse(animal);
animalObject.age = 10;
animal = JSON.stringify(animalObject);
console.log(animal);
console.log(typeof animal);