// const { name } = require("ejs");

const { name } = require("ejs");

// const obj1=new Object();//this syntax is called singleton object 

// obj1.name="ramesh";
// obj1.age=22
// obj1.location="solapur"
// obj1.myfun=function() {
//     console.log("hello");
    
// }

// console.log(obj1);
// console.log(obj1.myfun());


// const obj2={
//     email:"ram@gmail.com",
//     obj3:{
//         name:"sita",
//         obj4:{
//             name:"lakshyman"
//         }
//     }
// }

// console.log(obj2.obj3.obj4.name);

// const myobj1={1:"a",2:"b",3:"c"}
// const myobj2={4:"d",5:"e",6:"f"}

// console.log(Object.keys(myobj1));//the key must store in the array
// console.log(Object.values(myobj2));//values alos store in array
// console.log(Object.entries(myobj1));

// console.log(myobj1.hasOwnProperty("c"));//check only keys






// const newobj={myobj1,myobj2}
// console.log(newobj);

// const newobj1=Object.assign({},myobj1,myobj2)//add multple object into singlr object
// console.log(newobj1);

// const newobj2={...myobj1,...myobj2}
// console.log(newobj2);


//destructureing object
const newobj3={
    name1:"ramesh",
    age:22
}

const {name1 : nav} = newobj3;
console.log(nav);



