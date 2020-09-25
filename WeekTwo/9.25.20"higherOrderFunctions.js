// Higher order functions
        // .filter()
        // .reduce()      
        // .map()
  
    

// filter questions
// Level 0
    // given an array of numbers filter out any that are larger than 10
   lv10Numbers = ['2', '4' ,'12' ,'28' ]
    lv0Answer = lv10Numbers.filter(function(zero){ return zero < 10})
   console.log(lv0Answer)

// Level 1
    // given an array of numbers filter out any that are divisible by 3
   lv12Numbers = ['2', '4' ,'12' ,'28', '6' ]
   lv12Answers =lv12Numbers.filter(function(one){return one %3 !== 0 })
    console.log(lv12Answers)
    // given an array of nubers filter out any that are even
   lv13Numbers = ['2','3','4','5','6']
   lv13Answers =lv13Numbers.filter(function(two){return two %2  === 1 })
    console.log(lv13Answers)
// Level 2
    // given an array of strings, filter out any that are longer than 4 chars
    // pastries = ['coffe','cake','cookies']
    let fruit = ['mango','kiwi', 'apple']
    longFruit = fruit.filter(function(n){
        return n.length < 5
    })
    console.log(longFruit)

    // given an array of arrays, filter out any that are shorter than 10 elements
   let plants = [['tree'],['bush','grass'],[1,2,3,4,5,6,7,8,9,10,11]]
    longPlants = plants.filter(function(n){ return n.length >= 10})
    console.log(longPlants)


// Level 3
    // given an array of objects, filter out any that dont have a key called 'firstName'

// reduce questions 
let arr = [1,2,3,4]
// level 0:
    // given an array of numbers add them all together
    let rlevel0 = arr.reduce(function(a,b){ return a+b});
    console.log('reduce level0,',rlevel0)

// level 1:
    // given an array of numbers, multiply them all together

// level 2:
    // given an array of strings, concatiante them together 

// level 3: 
    // given an array of arrays make them all into one array 

// level 5:
    // given an array of strings, remove any vowels and concatenate them toegher 


// map questions
// level 0:
    // given an array of numbers, return a new array with all numbers multiplied by 2

// level 1:
    // given an array of numbers, return a new array with all numbers increased by 1

// level 2:
    // given an array of strings, return a new array with all strings as capitals