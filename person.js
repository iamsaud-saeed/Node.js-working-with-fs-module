class Person {

  constructor(name , age)
  {
    this.name = name;
    this.age = age;
  }

  display_information() {
    
    console.log(`My name is ${this.name} & I'm ${this.age} year of age...`);
  }
}
module.exports = Person;