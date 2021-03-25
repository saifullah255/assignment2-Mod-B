//..........................task#01,...........................

// Merge an object
let first = {name: 'saif'};
let last = {lastName: 'khan'};
let person = Object.assign(first, last);
console.log(person);
// {name: 'saif', lastName: 'khan'}
console.log(first);
// first = {name: 'saif', lastName: 'khan'} as the target also changed

// Merge multiple sources
let a = Object.assign({foo: 0}, {one: 1}, {two: 2});
console.log(a);
// {foo: 0, bar: 1, baz: 2}

// Merge and overwrite equal keys
let b = Object.assign({foo: 0}, {foo: 1}, {foo: 2});
console.log(b);
// {foo: 2}

// Clone an object
let obj = {person: 'saif khan'};
let clone = Object.assign({}, obj);
console.log(clone);
// {person: 'saif khan'}




//......................task#02......................

function example() {
    return condition1 ? value1
         : condition2 ? value2
         : condition3 ? value3
         : value4;
         
}



//......................task#03......................


//for in loop

var people = {fname:"saif", lname:"khan", age:22};

var text = "";
var x;
for (x in people) {
  text += people[x] + " ";
}
console.log(text)



//for of loop

var txt = 'JavaScript';
var x;

for (x of txt) {
console.log(x);
}


//......................task#04......................

var hello;

hello = () => {
  return "Hello World!";
}
console.log(hello)
