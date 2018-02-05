class Ninja {
    constructor(name){

    this.name = name;

    this.health = 100;

    this.speed = 3;

    this.strength = 3;
    }

    sayName(){
        console.log("My ninja name is " + this.name);
        return this;
    }

    showStats(){
        console.log("Name: " + this.name + "\n" +
        "Health: " + this.health + "\n" +
        "Speed: " + this.speed + "\n" +
        "Strength: " + this.strength);
        return this;
    }

    karateChop(Ninja){
        Ninja.health -= 5;
        console.log(Ninja.name + " lost 5 hp");
        return this
    }
    karateKick(Ninja){
        Ninja.health -= 15;
        console.log(Ninja.name + " lost 15 hp");
        return this
    }

    drinkSake(){
        this.health += 10;
        console.log("Health is up 10");
        return this
    }

}

var ninja1 = new Ninja("William");
var ninja2 = new Ninja("Edgardo");
var ninja3 = new Ninja("Kapiolani");

ninja1.sayName();
ninja1.showStats();

ninja1.karateChop(ninja2);
console.log(ninja2.health);
ninja1.karateKick(ninja2);
console.log(ninja2.health);

ninja3.drinkSake();
console.log(ninja3.health);

//BUILDING SENSEI CLASS WHICH WILL BORROW FROM ORIGINAL NINJA CLASS

class Sensei extends Ninja {
    constructor(name){
        super(name);
        this.wisdom = 10;
        this.name = name;
        this.health *= 2;
        this.speed = 3;
        this.strength = 3;
    }

    speakWisdom(){
        return "Notice that the stiffest tree is most easily cracked, while the bamboo or willow survives by bending with the wind."
    }
}

var sensei1 = new Sensei("Tony");

console.log(sensei1.speakWisdom());
sensei1.drinkSake();
console.log(sensei1.health)