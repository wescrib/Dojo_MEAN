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

}

var ninja1 = new Ninja("William");

ninja1.sayName();
ninja1.showStats();
// console.log(ninja1);