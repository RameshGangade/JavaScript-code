
 // .js is dynamic language beacause you dont have to need declare type of variable
 //.on the basis of how we store data and how we get that data , Datatypes are divided
 
 // 1)primitive (call by value)

 //   7 type : null(means empty ), undefined , String , Number , Boolean , Symbol(used to make a value uniq) , BigInt

    // let noofboys=null;
    // console.log(noofboys)//return null
    // console.log( typeof noofboys)//return object 

    // let time;
    // console.log(time)//return undefined
    // console.log(typeof time)//reurn undefined

    // let str="ram";
    // let num=8;
    // let isBoy=true;

    // let data=Symbol('123')
    // let data1=Symbol('123')

    // console.log(data);
    // console.log(data1);

    // console.log(typeof data)
    // console.log(data==data1);//return false

    // let BIgnumber=345443576n;
    // console.log(typeof BIgnumber)
    // console.log(BIgnumber);


 // 2)non-primitive  (referance)
   
 //   3 type : array , Object , Function

 let cars=["hundai","suzuki","tata","bmw"];

 let myinfo={
    nmae:"ram",
    age:22,
    hobby:"cricket",
    secret:()=>{
       console.log("i want to live life alone inn peace")
    },
    brothers:["umesh","ramesh","satish","mahesh"]
 }

console.log(myinfo)
myinfo.secret()
 

let demo=()=>{
    console.log("hi")
}

//the all non=primitive data type elmnts retuns same rturn type object except function ,
//it return function but we called it object function

console.table([typeof cars,typeof myinfo,typeof demo])