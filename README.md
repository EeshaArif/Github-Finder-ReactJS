## ReactJS:
reacts to state change and updates the DOM

// It just renders the view and makes sure the view is in sync with the state

#### Every Component:
```
class <classname>{
       state = {}; // data you want to display when the component is rendered
       render() {  // What the component should look like
      

   } // Output: React Element (A JS object that maps a DOM object) 
// It keeps a light weight representation of DOM (A virtual DOM)

// when you change the state of a component, you get a new react element (object)
}
```

- `create-react-app react-app`
- `react-app\ npm start`

ctrl+d *2/3 - to change same words at diff locations at once

imrc
cc
shortcuts to import react and create class respectively

<React.Fragment></React.Fragment> // No double divs

{} - Any valid js expression  this.state.<var>

## JavaScript
var - function 

let - block

const - block

every function in js is an object
They have properties and methods... with the bind() menthod we can set the vlue of this permanetly

### Arrow Functions:
```
const square = function(number) {return number*number}
const square = number => {return number*number}
const square = number => number*number 
```
```
const jobs = [
{id: 1, isActive: true },
{id: 2, isActive: true },
{id: 3, isActive: false},
];

const activeJobs = jobs.filter(function(jobs) {return job.isActive});
const activeJobs = jobs.filter(jobs => job.isActive);
```
// Arrow functions dont rebind the "this" keyword (which is a good thing)

### Array.map() (to render list of items)

`const colors = ['red', 'green', 'blue'];`

// Takes each item and returns a new item

// It returns a new array
```
const items = colors.map(function(color){return '<li>'+color+</li>; });
const items = colors.map(color => '<li>'+color+'</li>');
const items = colors.map(color => `<li>${color}<\li>`);
```
### Object destructuring 
```
const address = {
street: '',
city: '',
country: ''
};

const street1 = address.street;
const city1 = address.city;
const country1 = address.country;
```
```
const {street, city, country} = address;
const { street:street1 } = address; // alias
```
```

