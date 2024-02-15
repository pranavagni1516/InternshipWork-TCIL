// dynamic typed language 
console.log("Namaste Dunia")
// Named memory location is variable by let

let a = true;
console.log(a);

// let vs var difference is of scope
// var is global 
// let is local

let names = "name";
console.log(names);

names = 2;
console.log(names);

let age = 17;
let statuss = (age >= 18) ? 'Yes Vote' : 'No Vote';
console.log(statuss)

// object creation
const rectangle = {
    len:1,
    bre:2,

    // method
    draw: function(){
        console.log("draw");
    }
};

// factory function

function createRectangle() {
    return rectangle1 = {
        len:1,
        bre:2,

        draw: function(){
            console.log("drawing");
        }
    };
}