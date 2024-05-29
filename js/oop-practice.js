// STEP 1
class Cat {
    constructor() {}
  }
  
  const Dog = function() {};
  
// STEP 2
// const cat = new Cat();
// const dog = new Dog();
  
// STEP 3
// class Animal {
//     constructor() {
//     console.log("The Animal has been created");
//     }
// }
  
// const animal = new Animal();
  
// STEP 4
// class Animal {
//     constructor(message) {
//     console.log(message);
//     }
// }
  
// const animal = new Animal("The Animal has been created");
  
// STEP 5
// class Animal {
//     constructor(type, breed, color, height, length) {
//     this.type = type;
//     this.breed = breed;
//     this.color = color;
//     this.height = height;
//     this.length = length;
//     }
// }
  
// const animal = new Animal("dog", "Golden Retriever", "golden", 24, 48);
  
// STEP 6
// for (let property in animal) {
//     console.log(property);
//     }
  
// STEP 7
// class Animal {
//     constructor(type, breed, color, height, length) {
//     this.type = type;
//     this.breed = breed;
//     this.color = color;
//     this.height = height;
//     this.length = length;
//     }
  
//     speak() {
//         if (this.type === "dog") {
//         return `The ${this.color} dog is barking!`;
//         } else if (this.type === "cat") {
//         return `The ${this.color} cat is meowing!`;
//         }
//     }
// }
  
// const animal = new Animal("dog", "Golden Retriever", "golden", 24, 48);
// console.log(animal.speak());
  
// STEP 8
// class Animal {
//     #type;
//     #breed;
//     #color;
//     #height;
//     #length;
  
//     constructor(type, breed, color, height, length) {
//     this.#type = type;
//     this.#breed = breed;
//     this.#color = color;
//     this.#height = height;
//     this.#length = length;
//     }
  
//     #checkType() {
//         return this.#type === "dog" ? "dog" : "cat";
//     }
  
//     speak() {
//         return `The ${this.#checkType()} has made a noise!`;
//     }
// }
  
// const animal = new Animal("dog", "Golden Retriever", "golden", 24, 48);
// console.log(animal.speak());
  
// STEP 9
// String.prototype.findWords = function(word, text) {
//     const matches = text.match(new RegExp(word, "gi"));
//     const count = matches ? matches.length : 0;
//     alert(`The word "${word}" was found ${count} time(s) in the provided text.`);
//     };
  
// const paragraph = "The quick brown fox jumps over the lazy dog. The dog is very lazy, but the fox is quite quick.";
//     "dog".findWords("dog", paragraph);
