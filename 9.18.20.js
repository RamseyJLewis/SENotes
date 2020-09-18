//Functions
//Defintion: A Javascript function is a reusable block of code designed to preform a perticular task.
//Note: 'invoking' or 'calling' a function makes it execute code


// Why even use functions
        //Reduces amount of code required
            // This is helpful becasue..
            // Reduces potential for error
            //  Gives potential for upgrades & changes
        

// Syntax
    // Single line syntax (unusual):
        // function(parameter){return x}
    // Multi line syntax
        //function name(parameter){}
                //do something 
        //return something
    //}

    //syntacx for using a function
        //name(argument)
       
 // parameters:
    // A functionm can require parameters
    // The perameter are values that are between the parenthesis when delcaring the function


    //Examples
    //A greeting function;
        //function decleration
        // function greet(parameter){
                //     return"Hello!"
                // }
        //function invoktaion
        // console.log(greet)

    //An addtion function;
    // function addtion(num1,num2){
    //      return num1 + num2;
    // }

    // console.log(addtion(3, 5));

//   //  A personalized greeting function
    
//     function personalGreeter(name){
//     return 'Hello ${name} welcome to my app.';
//     }
//     // console.log(personalGreeter('Clark Kent'))


//     var name = 'Clark Kent';
//     // console.log('Hello ${name} welcome to my app.')

////////////////////////////////////////////////////FunctionExersizes///////////////////////////////////////////////////////////

// level 0
    // create a function which returns the value, 'Hello'
//     function greet(parameter){
//         return "Hello!"
//     }
//     console.log(greet());
//     // create a function which returns the value, 'Goodbye!
//     function bye(parameter){
//         return 'Goodbye!'
//     }
//    console.log(bye());
// level 1   // create a function which has two parameters and returns the product of the two
    
    // function addtion(Fetty, Wap){
    //     return Fetty + wap;
    // }
    //     console.log(addtion(869,869))
    // create a function which has one parameter and returns a custom greeting using that param
        

// level 2
    // create a function which takes in a string and removes all dashes and replaces them with spaces. 
    
    // var names =['Robby,Jones','Kevin,Bradley','Sandy,Sanders']
       
    // function perGret(names){ 
    //             return `Hello ${names} welcome to GreenLand!`;
    //         }
    //         console.log(perGret(names[0]));
    //         console.log(perGret(names[1]));
    //         console.log(perGret(names[2]));
            

// level 3
    // create a function which takes in an array and removes the last and first items 

    var color = ['Pine,Green','Ultra,Violte','Cobalt,Blue']


    function simpleColor(array){
        var firstItem = array.shift()
       var lastTime = array.pop()
        return array
    }

    console.log(simpleColor(color))
            

    // NEW QUESTIONS

// level 1
    // create a function which returns the opposite of a number
    // Examples:
        // input: -1, output: 1
        // input: 40, output: -40 

        var number = 40

        function negNum(N){
            
            var negSign= -N;
            return negSign;
        }
console.log(negNum(number))

//level 3
    // create a function which takes in a non-integer and returns that number multiplied by 13 and then rounded UP to the next integer
       
    function calc(n){
          
        var multiplied =  n*13;
         return Math.round(multiplied);
        }

    console.log(calc(2.111))

    // level 4
    // create a function which takes in a string and removes the first, last, and middle letters
    // create a function which returns a random whole number between 25 & 50

   


