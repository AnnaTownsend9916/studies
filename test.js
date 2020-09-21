let abc = "abcdefghijklmnopqrstuvwxyz"

let string = 'taco cat'  //dont say word because it could be sentence

function isRepeated(string){ //are letters getting repeated? 2X pattern
    let repeated = {}; //leave empty
    for(let i=0; i<string.length; i++) { //run through string
        let letter = string.charAt(i)  //letter is 
        if(repeated[letter]){ //if repeated
            repeated[letter]++ //keep count
        } else { //otherwise
            repeated[letter] = 1 //since it has to be intitialized to avoid a falsey value it will still be one
        }
    }
    return repeated; //return results
}

//cant be 0. If odd only by one element and if even still have to match letters twice in string.