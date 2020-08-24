//Object literals

var myObj = {
    name: "YOYO",
    id : 123,
    "is Cool": true,
    randArray: [1,2,3,4]
};

//accessed using dot notation.

myObj.id = 456;

// multiword property name
myObj["is Cool"] = false;

for (let key in myObj) {
    // keys
    console.log( key );
    // values for the keys
    console.log( myObj[key] );
}

//emulate class with function

function Die(col){
    this.color = col;
    this.faces = [1,2,3,4,5,6];
    this.roll = function(){
        var randNum = Math.floor((Math.random()* this.faces.length)+1);
        return this.faces[randNum-1];
    };
}

// construct an object using above function
var oneDie = new Die("0000FF")
console.log(oneDie.color)
console.log(oneDie.roll())

//prototype
function TestObj(name){
    this.name = name;
    this.list = [0,1,2,3,4];
}
TestObj.prototype.fun = function(){
    console.log("hello");
};

var test1 = new TestObj("YO");
test1.fun();

// inheritance
var vehicle = {
    move: true,
    fun(){
        console.log("Hello from vehicle func()")
    }
}

var car = {
    legs:4
}
car.__proto__ = vehicle;

console.log(car.move);

function Boat(name){
    this.name = name;
}

Boat.prototype = vehicle;
var myboat = new Boat("Titanic");
console.log(myboat.move);

//object.create
var benz = Object.create(car);
console.log(benz.legs);
benz.vendor = "Mercedes-Benz"

//class
class MyClass{
    constructor(name) {
        this.name = name;
    }
    myfunc(){
        console.log("Hello from myfunc()");
    }
}
let myclass = new MyClass("test");
myclass.myfunc();

//override
var bike = {
    tire: 2,
    __proto__ : vehicle
}
bike.func = function (){
    console.log("Hello from bike func()")
};
bike.func();

//setter/getter
let animal = {
    walk() {
        if (!this.isSleeping) {
            console.log(`I walk`);
        }
    },
    sleep() {
        this.isSleeping = true;
    }
};

let rabbit = {
    name: "White Rabbit",
    __proto__: animal
};
rabbit.sleep();
console.log(rabbit.isSleeping);
console.log(animal.isSleeping);

//constructor

let boat1 = new Boat("boat1");
let boat2 = new boat1.constructor("boat2");
console.log(boat2.name);

//proto chain
var arr = [1,2,3];
console.log(arr.__proto__===Array.prototype);
console.log(arr.__proto__.__proto__ === Object.prototype);
console.log(arr.__proto__.__proto__.__proto__);

//morden proto

var human = {
    legs: 2
}

var superman = Object.create(human,{
    canFly:{
        value:true
    }
});
console.log(superman.legs); //2
console.log(superman.canFly);//true
console.log(Object.getPrototypeOf(superman) === human);//true
Object.setPrototypeOf(superman, {})
console.log(superman.legs);//undefined

//inherit from class
class mySubClass extends MyClass{
    hide() {
        this.myfunc();
    }
    myfunc() {
        super.myfunc();
        console.log("And MySubClass also wanna say hello!")
    }

}
let mysubclass = new mySubClass();
mysubclass.hide();

//static method
class Article {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }
    static compare(articleA, articleB) {
        return articleA.date - articleB.date;
    }
    static createTodays() {  //static method as a factory for creating objects!
        // remember, this = Article
        return new this("Today's digest", new Date());
    }

}
let articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1))
];
articles.sort(Article.compare);
console.log(articles[0].title );
let article = Article.createTodays();
console.log(article.title);
console.log(article.date);


