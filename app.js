// javascipt function practice question

function counVowel(str){
    let count = 0;
    for(let i=0 ; i<str.length;i++){
       if(str.charAt(i)=="a"||str.charAt(i)=="e"||str.charAt(i)=="i"||str.charAt(i)=="o"||str.charAt(i)=="u"){
        count++;
       }
    }
    console.log(count);
}

let str = "welcome to my channel";
// counVowel(str);

// print all the element of an array those are greater than number that is sent by user

const arr = [23,45,10,-5,9,0,67,11,12,2.3,12.4];

function getLargerElements(arr,num){
    for(let value of arr){
        if(value>num){
            console.log(value);
        }
    }
}

// getLargerElements(arr,5);

// wap to generate a num within a range

// let num = Math.floor( Math.random()*6 )+ 90; // 90 to 95
// console.log(num);

function generateRandomNumber(start,end){ //end no is exclusive
    let diff = end - start ;
    let num = Math.floor(Math.random()*diff) + start;
    console.log(num);
}
// generateRandomNumber(100,200);

// generate a country name of longest input

const country = ["australia","germany","africa","united states of america","Bharat"];
function longestCountry(country){
    let largest = "";
    for(let i=0;i<country.length;i++){
       if(country[i].length>largest.length){
        largest = country[i];
       }
    }
    console.log(largest);
}
// longestCountry(country);

// write a function to print a poem
function printPoem(){
    console.log("Johny,johny!yes papa");
    console.log("eating sugar no papa");
    console.log("telling lies no papa");
    console.log("open your mouth hahaha")
}

// printPoem();

// write  function to play a dice roll
  function diceRoll(){
    let dice = Math.floor(Math.random()*6) + 1 ;
    console.log(dice) ;
}
// diceRoll();

// function with argument

function info(name,age){
    console.log(`Hello my name is ${name} and i am ${age} years old`);
}
// info("aradhya",27);

const marks = [85,87,89,56,90,100];
function printMarks(marks){
    for(marks of marks){
        console.log(marks);
    }
}
// printMarks(marks);

// function that gives average of 3 number
 function average(num1,num2,num3){
    console.log((num1 + num2 + num3)/3);
 }
//  average(23,43,68);

// fuction that print the multiplication  table of a number

function printTable(num){
    for(let i = 1 ; i <= 10;i++){
        console.log(num*i);
    }
}
// printTable(37);

function sum(a,b){
    return a+b;
}
//  console.log(sum(5,7));
// now we want to calculate sum of three value using this function
// console.log(sum(sum(4,5),7)); //first internal function will execute than it will return some value and than outer function will execute

function isAdult(age){
    if(age<18){
        return "not adult";
    }
    else{
        return "adult";
    }
}
// console.log(isAdult(30));

function printSum(num){
    let sum = 0;
    for(let i =1 ; i<=num;i++){
         sum += i ;
    }
    return sum ;
}
// console.log(printSum(50));

const fruits = ["apple","bananan","mango","papaya","pea"];
function concatString(arr){
  let str = "";
  console.log("string after concatenation");
  for(let fruit of fruits){
    
    str = str + " " +fruit;
  }
  return str;
}
// console.log(concatString(fruits));

let greet = "hello";
function changeGreet(){
    let greet = "namaste";
    console.log(greet);
    function innerGreet(){
        console.log(greet);
    }
}

// console.log(greet);
// changeGreet();

// let output = function greet(){
//     return "hello world";
// }

// console.log(output());

const arr1= [2,4,5,6,7,8,9,10];
//  arr1.forEach((value,index)=>{
//     console.log(index,value);
// })

// high order function
// take one or multiple functions as argumrnts

function multipleArguments(func,num){
    for(let i=1;i<=num;i++){
        func();
    }
}
 function greeting(){
    console.log("hello world!");
}

// multipleArguments(greeting,5);
// multipleArguments(function(){console.log("namaste")},5)

// factory function in javascipt

//  methods are those functions that are defined inside an object

// const calculator = {
//     add : function(a,b){
//         return a + b;
//     },
//     subtract : function(a,b){
//         return a-b;
//     },
//     multiply : function(a,b){
//         return a * b;
//     },
//     divide : function(a,b){
//         return a/b;
//     }
// }
// console.log(calculator);
// accessing a function from an object
// console.log(calculator.add(5,3));
// console.log(calculator.subtract(5,3));
// console.log(calculator.multiply(5,3));
// console.log(calculator.divide(5,3));

const calculator = {
    add(a,b){
        return a + b;
    },
    subtract(a,b){
        return a - b ;
    },
    multipy(a,b){
        return a*b;
    },
    divide(a,b){
        return a/b;
    }

}
// console.log(calculator.add(5,6));

// write a program that return a unique character from string

let str1 = "aabbbdcgerfshgjirrk";

function uniqueStr(str){
    let ans = "";
    for(let i = 0;i<str.length;i++){
        let curChar=str[i];
        if(ans.indexOf(curChar)==-1){
            ans += curChar;
        }
    }
    console.log(ans);
}
uniqueStr(str1);

// write a function that capitalize the first letter of each word in a string

function capitalizeWords(str) {
    return str
        .split(' ')                    // Split the string into an array of words
        .map(word =>                   // Use map to go through each word
            word.charAt(0).toUpperCase() + word.slice(1) // Capitalize the first letter of each word
        )
        .join(' ');                    // Join the array back into a string
}

// Example usage:
const sentence = "hello world! welcome to javascript.";
console.log(capitalizeWords(sentence)); 
// Output: "Hello World! Welcome To Javascript."

// wap to reverse a string 

// function reverseString(str){
//     let ans = "";
//     for(let i = str.length;i>=0;i--){
//         ans = ans + str.charAt(i);
//     }
//     console.log(ans);
// }
// let str3 = "welcome to javascript";
// reverseString(str3);

