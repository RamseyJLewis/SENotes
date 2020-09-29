

//     //Arrays: Are list's of information, they are surrownded by square brakcets.
//     // can contain any data type, and are secretly actually objects.

//     // var arr = ['thing1', -3, null, {'object':'Value' }, 'array'];
//    // console.log(arr);

//     //this previous arravy is VERY uncommon, usually data is more organizerd by types

//     var students = [ 'Bill', "Bob", 'Tim']

//     // var testscore = [100], [98], [76];

//     //Indexing
//         //Defintion: Gtespecific elemts from within an array by using bracket notation
//         //Examples
//         var firstscore = testscore[0]
//         // console.log(firstscore);

//         var lastindex = testscore.length -1;
//         // var lsatscores = testscore [lastindex];
//         // console.log(lsatscore);

//         // .push()
//          //Definition: adds a new itm to the end of an array
//          var champions = ['Manchester United','Arsenal'];
//          console.log(champions) //logss :[ 'Manchester United', 'Arsenal' ]
//         champions.push('liverpool'); //logs [ 'Manchester United', 'Arsenal', 'liverpool' ]
//         console.log(champions);

//         // .pop()
//           //Definiton: Removes from the end of an array
//           champions.pop()
//           champions.pop()
//           console.log (champions) //logs: [ 'Manchester United' ]

//         // .unshift()
//             //Defintion: adds to the beginnig of an array
                // Note: We can add multiple arrays at once 
//             champions.unshift("New Castle");
//             console.log(champions); //logs: [ 'New Castle', 'Manchester United' ]

//         // .shift()
//             //Definiton: removes the begining of an array
//             champions.shift();
//             console.log(champions); //logs:[ 'Manchester United' ]

//         // .join
            //Definiton: Converts an array of strings based on a given character
            // var ChampionString = champions.join();
            // console.log(champions);

            // .splice()
            // Defintion: Add or remove an elemtns from anywhere in an array.
              var computers = ['Mac','Dell','Lenovo', 'Alineware'];
             // Insert Acer into index 2 usling .splice
                computers.splice(2,0,'Acer');
            //   console.log(computers);

            // Insert HP inot index 4 and delete whatever is currently at index 4
                computers.splice(4,1,'HP');
                // console.log(computers);    

            // Insert Tosshiba and Fujistsu to the array without deleteing anyting
           var compNum = computers.length 
            computers.splice(compNum/2, 0,'Toshiba','Fujitsu');
            console.log(computers);

            

            //ArrayExersizes
            //Log outputs to the console to ensure your work is accurate

            // level 0
                // declare a variable and set it euqal to an array of your favorite tv shows
                var favoriteTvShows = ['TheRain',"Natgeo",'N.G.E'];
              //  console.log(favoriteTvShows);
                // declare a variable and set it euqal to an array of your family members ages (lie if you want)
                var familyMemAge = ['63', '57', '34'];
                //console.log(familyMem);
        
            // level 1
                // add a tv show to the end of your tv show array
              //  favoriteTvShows.push('Lucifer');
                //console.log(favoriteTvShows);
                // remove the first element from your ages array
               // favoriteTvShows.shift();
               // console.log(favoriteTvShows);
    
           // level 2
                // declare a variable and set it equal to your interests
                var interests = ['videoGames','fomula1','newTech'];
               // console.log(interests)
                // using code, add a new interest to the front of the array
                //interests.unshift('I.M.S.A Racing')
                // using code, remove the last interest
               // interests.pop(interests)
            
        // level 3
            // given an array with a phone number from the USA, ['516-555-5555'] convert it into a string, add '+1' to the front, and convert it back to an array.
            var phoneNum = ['516-555-5555'];
            //phoneNum.unshift('+1');
            phoneNum = ' +1-' + phoneNum;
            //console.log(phoneNum);
        // level 4
        // given the following array, insert a new item into the center try without notes, use the internet if needed instead
             var fruits = ['apple', 'orange', 'peach', 'lemon'];
            var frtNum = fruits.length

            fruits.splice(frtNum/2,0,'Mango');
            // console.log(fruits);

        // level 5
        var famousPeople = ['Barak Obama', 'Emma Watson', 'David Beckham','Justice Beaver'];
        // Given the previous array of names, get the last person's initials
  
       var person = famousPeople[famousPeople.length-1];
       var firstInital = person[0];
       var spaceIndex = person.indexOf(' ');
       var lastInitial = person[spaceIndex + 1]
        console.log(firstInital + lastInitial);
        // Write pseudocode before starting   
        // HINT: Break this problem into parts, it will take multiple lines of code. 

        // level 6
    // given an array of names, get the middle person's initials

            
    var person = famousPeople[ famousPeople.length/2];
    var firstInital = person[0];
    var spaceIndex = person.indexOf(' ');
    var lastInitial = person[spaceIndex + 1]
     console.log(firstInital + lastInitial);