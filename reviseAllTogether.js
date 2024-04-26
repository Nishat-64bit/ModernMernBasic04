
/**
 * todo: i will make a arrow function for sum, substractin, multiflication, division,modulas , Exponential use array to variable and use loop 
 * todo : task1 : make all function parameter (num1,num2)
 * 
 */

//sum function

const sum = (num1,num2)=>{
    // console.log(num1+num2,"this is sum");
    return num1+num2;
}

//substractin function

const substractin = (num1,num2)=>{
    // console.log(num1-num2,"this is substraction");
    return num1-num2;
}

//multiflication function

const multiflication = (num1,num2)=>{
    // console.log(num1*num2,"this is multiflication");
    return num1*num2;
}

//division function

const division = (num1,num2)=>{
    // console.log(num1/num2,"this is division");
    return num1/num2;
}

//modulas function

const modulas = (num1,num2)=>{
    // console.log(num1%num2,"this is modulas");
    return num1%num2;
}

//Exponential function

const Exponential = (num1,num2)=>{
    // console.log(num1**num2,"this is Exponential");
    return num1**num2;
}


let allFunc = [sum,substractin,multiflication,division,modulas,Exponential]
let num1 = 20;
let num2 = 10

for (let i= 0; i<allFunc.length; i++){
    let allResult = allFunc[i](num1,num2)
    console.log(allResult);
}