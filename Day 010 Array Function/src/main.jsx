var numbers = [3,56,2,48,5];

//map - create a new array by doing something with each item in an array.

 const newNumber = numbers.map((x)=>{
    return x *2
 });
console.log(newNumber);

var newNumbers = [];

numbers.forEach((x)=>{
    newNumbers.push(x * 2);
});
console.log(newNumbers)

//Filter- create a new array by keeping the items that return true.
const filternumber= numbers.filter((num)=>{
    return num >10

});
console.log(filternumber)
//Reduce - Accumulate a value by doing something to each item in an array.
//sum of all number 
var sum = 0;
numbers.forEach((currentnum)=>{
   sum += currentnum;
})
console.log(sum)

var reducer = numbers.reduce((accumelator,CurrentNumber)=>{
    return accumelator + CurrentNumber
})
console.log(reducer);

//Find - Find the first item that matches from an array.
 var findfirst = numbers.find((num) =>{
    return num > 10;
})
console.log(findfirst)
//FindIndex - Find the index of the first item that matches.
var findindex =numbers.findIndex((num)=>{
    return num > 10;
})
console.log(findindex)
