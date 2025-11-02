const cars=["bmw","tata","suzuki","hundai"]
const bikes=["honda","splender","hf","splender"]

// cars.push(bikes)//push function the second array get as single element at last
// console.log(cars);

// const newarr=cars.concat(bikes)//concat get new elements individual 
// console.log(newarr);

// const newarr2=[...bikes , ...cars]//called spread operator work same as concat and
// //  here no limtation of array adding
// console.log(newarr2);


// const arr6=[2,4,6,[6,"satya",3,4],[4,6,7,"sita",[5,2,6],["ram"]]]
// console.log(arr6.flat(Infinity));//convert hole array in a single array
// ---------------------------------------------------------------------------------------


// console.log(Array.isArray("ram"));
// console.log(Array.from("ram"));//from function convert it into array
// console.log(Array.from({name:"ramesh"}));//intersetd 

const str1=["ramesh"]
const str2="umesh"
const str3="ram"

console.log(Array.of(str1,str2,str3));//add single variale and array also




