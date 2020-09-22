 //Loops
 // level 0
    // Create a function which contains a for loop 
    // the for loop should contain the following code: console.log('this is a loop');
    // After the loop return 'finished looping'
    function logLoop(){

        for(var i = 0; i < 1; i++){
        
        console.log('this is a loop')
        }

        return 'finished looping'
    }
    console.log(logLoop())

    // level 1
    // Q1.1
        // Create a function that iterates over all elements in an array and logs them to the console

        var colors =['Red','Blue','Green']
        
        function logColor(){
            for(var i = 0 ; i < colors.length; i++){

            console.log(colors[i])

            }
            return 'list colors'
        }
        console.log(logColor())
    // Q1.2
        // Create a function that iterates over all elements in an array of numbers and multiplies them by 3
        var nums = ['3', '6', '9']
        function multNums(){
            for (var i = 0; i < nums.length; i++){
                mult = nums[i] * 3;
                
                console.log(mult)
            }
            return 'finalNums'
        }
        console.log(multNums())

// level 2
    // Q2.1:
        // Create a function that iterates over ever letter in a word.
        // If this word contains a specific letter log that letter's index
        // Note: this imitates indexOf(), dont use indexOf in this solution.
        var str = 'this is a string'
        function evLetter(letter){
            for (var i = 0; i < str.length; i++){
            newStr = str[i];
            //console.log(newStr)
            if(newStr === letter){
                return i;
            }
        }
        return 'This string does not contain the letter ' + letter + ".";
            
        }
        console.log(evLetter('a'))

// level 3
    // Q3.1
        // Create a function that iterates over each element in an array of strings.
        // It capitalizes the first and last letters and returns a new array with first and last letters capitalized
        var arrOfStr = ['orange','plum','apple']

        function capFsLst(arr){         
            var capWords = [];

            for (var i = 0; i < arr.length; i++){
                var ele = arr[i]
                var firstLetter = ele.slice(0, 1).toUpperCase();
                var middle = ele.slice(1, -1);
                var last = ele.slice(-1).toUpperCase();
                var capitalize = firstLetter + middle + last;
                
                capWords.push(capitalize);

             
            }
            return capWords;
        }
        console.log(capFsLst(arrOfStr));
// level 4
    // 
// level 5
    // Q5.1:
        // Create a function which reverses the order of a word.
        // If you managed without using a loop 🎉 congratulations 🎉
        // Now try to do it using a loop
    // Q5.2:
        // Create a function which takes in an array of words and reports which ones have the letter e 
    