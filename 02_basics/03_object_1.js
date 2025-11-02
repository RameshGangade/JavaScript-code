

const symbilvarable=Symbol("salary")

const obj1={      // this syntax is called object literal and non-object singleton
    name:"ramesh",
    hobby:["cricket","kabbdi","hokkey","badminton"],
    age:22,
    isLoggedIn:false,
    "location":"solapur hotagi",
    [symbilvarable]:"i want to access"//syntax of symbol varible convert into the object

}

// console.log(obj1["name"]);

// console.log(obj1.hobby);

// console.log(obj1["location"]);

// console.log(obj1[symbilvarable]);//syntax to access symbol variable
// console.log(typeof [symbilvarable]);

// obj1.country="india";
// console.log(obj1);


// obj1.hobby=["hollyball","baseball"];
// Object.freeze(obj1);//after declare of this freez function you cant changes in object
// obj1.location="jotagi goan solapur"
// console.log(obj1);


obj1.function1=function(){// syntax of function create in object 
    console.log("hello every one");
}

obj1.function2=function(){// 
    console.log(`hello every one my name is ${this.name}`);// i want access object varible in function
}




console.log(obj1);
console.log(obj1.function1());
console.log(obj1.function2());






