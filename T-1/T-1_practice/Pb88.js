// Write a script to define two JSON objects named as “division1” and
// “division2” having an array to store 5 integer numbers. Write this
// object in a file named XYZ.txt using file system. Define third array
// as result which gives output as explained below: Suppose first array
// contains base value and second array contains power value and then
// third array will give output as: a^b.For example: first array[0]=2 and
// second array[0]=3 then it should return 8 in third array[0] .Also
// append this result in XYZ.txt and as well as on console.

var fs = require('fs');
var div1 = {
    'numbers':[2,3,4,5,6]
}
var div2 = {
    'numbers':[3,3,3,3,3]
}
fs.writeFileSync('XYZ.txt',JSON.stringify(div1)+'\n'+JSON.stringify(div2));
var result = {
    numbers:[]
}
for (let i= 0; i<div1.numbers.length; i++){
    result.numbers[i] = Math.pow(div1.numbers[i],div2.numbers[i]);
}
fs.appendFileSync('XYZ.txt','\n'+JSON.stringify(result));
console.log(result);