'use strict'

class First {
    constructor (name){
        this.name = name
    }
    hello() {
        console.log(`Привет, я метод родителя!`);
    }
}
class Second extends First {
    hello() {
        super.hello()
        console.log(`А я наследуемый метод!`)
    }
    
}
let second = new Second ()
//const first = new First()
//first.hello()
//console.log(first)
second.hello()
//console.log(second)
