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

let rectta = createRectangle();

rectta.color = 'yellow';

delete rectta.color;


// string primitive and object

let lastName = 'Babbar';
console.log(lastName , typeof lastName);

let firstName = new String('Babbar');
console.log(firstName , typeof firstName);


let courses = [
    {no:1,naam:'love'},
    {no:2,naam:'rahul'}
];

console.log(courses);

let course = courses.find(function(course){
    return course.naam =='love';
});
console.log(course);

// default parameters

function sI(p,r=5,y){
    return (p*r*y/100);
};

console.log(sI(1000,10,5));

// Getter and setter
let person = {
    fName : 'Pranav',
    lName : 'Agnihotri',

    get fullName(){
        return `${person.fName} ${person.lName}`;
    },

    set fullName(value){
        // if(typeof(value) != String){
        //     throw new Error("Not a string");
        // }
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
};

console.log(person.fullName);
person.fullName = 'Rahul Kumar';
console.log(person.fullName);



// person.fullName = 1;

// try catch
try{
    person.fullName = true;
}
catch(e){
    alert(e);
}

console.log(person.fullName);