//var is private
//this is public 

class Ninja
{
    constructor(name){
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
    }

    SayName(){
        console.log(this.name);
    }

    showStats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }

    drinkSake(){
        this.health += 10;
        console.log(`New Health is at ${this.health}`);
    }

    Punch(target){
        target.health -= 5;
        console.log(`${target.name} was punched by ${this.name} and lost 5 Health!`);
    }

    Kick(target){
        target.health -= this.strength * 5;
        console.log(`${target.name} was kicked by ${this.name}. Enemy's health stat is now ${target.health}`); 
    }
}

class Sensai extends Ninja{
    constructor(name){
        super(name);
        super.health = 200;
        super.speed = 10;
        super.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkSake();
        let quotes = [`SHOTS SHOTS SHOTS`, `Shot o clock`, `Life is a box of chocolate`, `I'm the Dojo Master now`]
        console.log(quotes[Math.floor(Math.random()*4)]);

    }

}

var ninja1 = new Ninja("Tina");
ninja1.SayName();

ninja1.showStats();
ninja1.drinkSake();
var ninja2 = new Ninja("Graham");
ninja1.Kick(ninja2);
var sensai1 = new Sensai("Mike");
sensai1.showStats();
sensai1.speakWisdom();
