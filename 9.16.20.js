// Define a new variable and set it equal to the string of your name
    // Log this to the console
// var name = 'Ramsey';
// console.log(name)

// Define a new variable and set it equal to a number
// var number = 20;
// console.log(number)
    // Log this to the console
// Set a variable to a boolean value 
// var boolean = true ;
// console.log(boolean)
    // Log this to the console
// 4. Create a variable called carName, assign the value Volvo to it.
// var carName = 'Volvo';
// console.log (carName)
// 5. Create a variable called num, assign the value 50 to it.
// var num = 50;
// console.log(num);
// 6. Display the sum of 5 + 10, using two variables: num1 and num2.
//var 'num1' + 'num2';
// var num1 = 5
// var num2 = 10
// console.log(num1 + num2);
// 7. Create a variable called num3 , assign the addition of num1 and num2 to it.
// var num3 = num1 + num2
// console.log(num3)
// 8. Create a set of variables that define an animal (age, height, name, etc...). Must be atleast 6 variables.
// var ani = 'whale';
// var name = 'jimmmy';
// var age =  18;
// var length = '30ft';
// var wings = false;
// var blowhole = true;

// var sentence = `My animal is a ${ani}. His name is ${name}, and he is ${age}, and ${length} long`;
// console.log(sentence);

//String Methods
    // .length
      //Examples:
        //var str = "Hello World!"
        //console.log(str.length);
    // .indexOf()
        // examples:
        // example1
          //var str2 = "ellow nova"
          //console.log(str2.indexOf( 'n'));
          //console.log(str2.indexOf('no'));
          // example2
          //var greeting = "Welcome, user! please enjoy the app!"
          //var console.log(greeting.indexOf('W')); //0
          //var console.log(greeting.indexOf(',')); // 7
          //var console.log(greeting.indexOf('Please')) // 15
    //Slice
      //Defintion : Returns a portion of the string.
      //Example 1:
     // var fruits = 'banana, peach, orange, apple,';
      //console.log(fruits.slice(4, 7)); //'na,'
     // console.log(fruits.slice(0, 6));  //banana
     // console.log(fruits.slice(15, 21)); //'orange'
     // console.log(fruits.slice(23, 28)); //'apple'
     // console.log(fruits.slice(23, fruits.length-1)); //'apple'
      //console.log(fruits.slice(4,-5));na, peach, orange, a


    // .substr()
        //Definition: Return a portion of a string. Inclusive on the start number, exclusive on the end. Cannot accept negative values.
        // works alomst identical to slice
        //console.log(fruits.substr(0, 6)); //'na,'
       //console.log(fruits.substr(8, 5));  //banana
      //  console.log(fruits.substr(15, 6)); //'orange'
      // console.log(fruits.substr(23, 5)); //'apple'
        //console.log(fruits.substr(4, -5));na, peach, orange, a

    // .replace()
        //Definiton: replace the first instance of a charecter
        //  Allthough .replace is inefficent and you'd normally avoid it here's an example
        //Examples
       // var repeat = "microsoft"
       // console.log(repeat.replace('i', 'a')); // macrosoft
       // console.log(repeat.replace('soft', 'strong')); //microstrong
  
        //.Splice()
//   if(repeat.indexOf('o') > -1 ){
//       repeat = repeat.replace('o', "A")
//       console.log(repeat)
//   }

//   var currentStr = 'Banana!'

//   if(currentStr.indexOf('a') > -1) {
//       currentStr = currentStr.replace('a','-')
//       console.log(currentStr)
//   } else {
//       console.log(`${currentStr} dosent have an 'a' to replace`)
//   };

//   if(currentStr.indexOf('a') > -1) {
//     currentStr = currentStr.replace('a','-')
//     console.log(currentStr)
// } else {
//     console.log(`${currentStr} dosent have an 'a' to replace`)
// };

// if(currentStr.indexOf('a') > -1) {
//     currentStr = currentStr.replace('a','-')
//     console.log(currentStr)
// } else {
//     console.log(`${currentStr} dosent have an 'a' to replace`)
// };

// if(currentStr.indexOf('a') > -1) {
//     currentStr = currentStr.replace('a','-')
//     console.log(currentStr)
// } else {
//     console.log(`${currentStr} dosent have an 'a' to replace`)
// };

///RESULT 
//B-nana!
// B-n-na!
// B-n-n-!
// B-n-n-! dosent have an 'a' to replace


// .split()
    //Definition: split a string into an array based on a given character

// .touppercase();
//Will convert a string to all uppercase
//console.log('Ramseyl'== 'RAMSEYL') // false

// .tolowecase
//will convert a string to all lowercase



// level 0
    // Q0: Declare a string with the value euqal to your name
    var name = 'Ramsey' 
    // Q1: Given the string, 'WE ARE SHOUTING!' log 'we are shouting'
    console.log('WE ARE SHOUTING'.toLowerCase());
// level 1
    // Q2: Declare a string and log its length 
    var str1 = 'tiger' ; 
    console.log(str1.length)
    // Q3: Given the string 'Hello World!', log the 6th character.
        //console.log('Hellow World!'.[5)
          console.log('Hellow World!' .charAt(5))
// level 2
    // Q4: Given the string 'Welcome World?', replace the question mark with an exclamation


// level 3
    // given any string, log the first and last characters