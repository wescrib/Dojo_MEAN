function Ninja(name){

    var self = this;

    this.name = name;

    this.health = 100;

    this.speed = 3;

    this.strength = 3;

    this.sayName = function(){
        console.log("My ninja name is " + name);
        return this;
    }

    this.showStats = function(){
        console.log("Name: " + name + "\n" +
        "Health: " + this.health + "\n" +
        "Speed: " + this.speed + "\n" +
        "Strength: " + this.strength);
        return this;
    }

    this.karateChop = function(Ninja){
        Ninja.health -= 5;
        console.log(Ninja.name + " lost 5 hp");
        return this
    }
    this.karateKick = function(Ninja){
        Ninja.health -= 15;
        console.log(Ninja.name + " lost 15 hp");
        return this
    }

}

var ninja1 = new Ninja("William");
var ninja2 = new Ninja("Edgardo")

ninja1.sayName();
ninja1.showStats();

ninja1.karateChop(ninja2);
console.log(ninja2.health);
ninja1.karateKick(ninja2);
console.log(ninja2.health);