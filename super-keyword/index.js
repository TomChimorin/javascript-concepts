// super =  keyword is used in classes to call the constructor or
//          access the properties and methods of a parent (superclass)
//          this = this object
//          super = the parent

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    move(){
        console.log(`The ${this.name} moves at a speed of ${speed}mph`)
    }
}
class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}
class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.runSpeed = swimSpeed;
    }

    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}
class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name, age);
        this.runSpeed = flySpeed;
    }

    fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 2, 12);
const hawk = new Hawk("hawk", 3, 50);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
console.log(fish.swimSpeed);
console.log(hawk.flySpeed);