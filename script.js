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
    hi() {
    console.log(`А я наследуемый метод!`);
}
}
let second = new Second ();
second.hello();
second.hi();


