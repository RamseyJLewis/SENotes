// Higher order exercises pt 2. No given Higher order function to use
    
// given an array of people objects, return only the females

let person1 = {
    name: 'Sam, spark',
    age: 25,
    gender: 'female'
}

let person2 = {
    name: 'Halsey, bruce',
    age: 45,
    gender: 'female'

}
let person3 = {
    name: 'Spock, lars',
    age: 37,
    gender: 'male'
}

let arrOfPeople = [person1, person2, person3]

let allFemales = arrOfPeople.filter( person =>  person.gender === 'female')
console.log(allFemales)
// the object will look like this: let sally = {name: 'Sally', age:55, gender: 'female'}


// given an array of numbers, return an array without any even numbers
let arrNum = [1, 2, 3, 4, 5, 6, 120, 9,]

let evemNum = arrNum.filter( even => even  %2)  
console.log(evemNum)

// given an array of people objects, return an array with all ages
let arrOfPeople2 = [person1, person2, person3]
    // the object will look like this: let sally = {name: 'Sally', age:55}
    let allage = arrOfPeople2.map( person =>  person.age )
    console.log(allage)
    // part 2 find the average age of all people in the array (run a higher order function on your new array)
   
    let averageAge = allage.reduce((a, c) => a + c)/ allage.length
    console.log(averageAge)


    // given an array of arrays, return an array of just the first elements of those inner arrays (only one array deep)
let arr = [['green shirt','blue shirt'], ['black pants', 'purple pants'], ['blue belt', 'pink belt']]
let firstFilter = arr.map( ele =>  ele[0] )
//let secondFilter = firstFilter.filter( indexOne1 => firstFilter[1])
console.log(firstFilter)
// given an array of full names ('Sally Wadsworth') return the first and last initials
//     let name = arrOfPeople.map(a => a.name)
    
    
//     let initials = name.reduce((a,c) =>{
//         let name = c.split(' ');
//         let firstInitial = name[0][0];
//         let latInitial = name[1][0];
//         a.push (firstInitial + lastInitial);
//         return a;
//     })
// console.log(initials)
