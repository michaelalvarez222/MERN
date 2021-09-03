class Ninja{
    constructor(name, health, speed, strength){
        this.name = name
        this.health = health
        this.speed = 3
        this.strength = 3
    }
    sayName(){
        console.log(`Ninja Name: ${this.name}`)
        return this
    }
    showStats(){
        console.log(`Name: ${this.name}, \n Strength: ${this.strength}, \n Speed: ${this.speed}, \n Health: ${this.health}`)
        return this
    }
    drinkSake(){
        this.health += 10
        return this
    }
}

class Sensei extends Ninja{
    constructor(name,wisdom){
        super(name,200,10,10)
        this.wisdom = 10
    }
    speakWisdom(){
        this.drinkSake()
        console.log("slow & steady wins the race so keep at your own pace.")
    }
}

const ninja1 = new Ninja("Daniela Alvarez",100)
console.log(ninja1)
// ninja1.sayName()
// ninja1.showStats()
ninja1.drinkSake()
ninja1.showStats()

const sensai1 = new Sensei("Michael Alvarez")
console.log(sensai1)
sensai1.speakWisdom();
sensai1.showStats();