var numbers = [3,56,2,48,5];

//map - create a new array by doing something with each item in an array.
function double(x){
    return x * 2;
}
 const newNumber = numbers.map(double);
console.log(newNumber);
var newNumbers = [];
function doublenew(x){
   newNumbers.push(x * 2);
}
numbers.forEach(doublenew);
console.log(newNumbers)

//Filter- create a new array by keeping the items that return true.
const filternumber= numbers.filter(function(num){
    return num >10

});
console.log(filternumber)
//Reduce - Accumulate a value by doing something to each item in an array.
//sum of all number 
var sum = 0;
numbers.forEach(function(currentnum){
   sum += currentnum;
})
console.log(sum)
var reducer = numbers.reduce(function(accumelator,CurrentNumber){
    return accumelator + CurrentNumber
})
console.log(reducer);
//Find - Find the first item that matches from an array.
 var findfirst = numbers.find(function(num){
    return num > 10;
})
console.log(findfirst)
//FindIndex - Find the index of the first item that matches.
var findindex =numbers.findIndex(function(num){
    return num > 10;
})
console.log(findindex)
