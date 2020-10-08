// Exercise 1.1
// ------------
// Creating a Cat class.

// A) Add some properties to our class instances.
// Objects created via this class should have the following properties:

// {
//   species: 'cat',
//   tiredness: 0,
//   hunger: 0,
//   loneliness: 0,
//   happiness: 0,
// }

class Cat {
  // Add code here
  constructor(name, breed) {
    (this.species = "cat"),
      (this.tiredness = 0),
      (this.hunger = 0),
      (this.loneliness = 0),
      (this.happiness = 0),
      (this.name = name),
      (this.breed = breed);
  }

  sleep = (hours) => {
    this.tiredness = this.tiredness - hours * 5;
    this.happiness = this.happiness + hours * 2;
  };

  eat = (kibbles) => {
    this.hunger = this.hunger - this.hunger / 5;
    this.happiness = this.happiness + 5;
  };

  play = (minutes) => {
    this.hunger = this.hunger - minutes * 3;
    this.happiness = this.happiness + 10;
  };

  wait = (minutes) => {
    this.tiredness += minutes / 5;
    this.hunger += minutes / 3;
    this.loneliness += minutes / 4;
    this.happiness -= minutes / 6;
  };
}

// B) Instantiate a cat called 'boots' with the Cat class.

let boots = new Cat("boots", "Simaese");

// C) What do you see when you console.log(boots)?
console.log(boots);
// D) What if I want to output just boots' species?
boots.sleep(8);
boots.eat(10);
boots.play(30);
boots.wait(20);

console.log(boots);
