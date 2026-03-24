// var a={
//     "name":'Node.js',
//     "age":20
// }
// console.log(a);
// const data=require('./1.json');
// console.log(data);

// var b={
//     "name":"Dhairya Shah",
//     "age":20,
//     "isPass":false,
//     "Address":{
//         "city":"Ahmedabad",
//         "State":"Gujarat"
//     },
//     "Subjec":["Maths","FSD"],
//     "Year":null
// }

// console.log(b.age);
//console.log(b.Address.city);

let obj=('{"var1":"LJ","var2":"University"}');
console.log(obj);
console.log(obj.var1);

console.log(obj.var1+" "+obj.var2);

result=JSON.stringify({var1:"LJ",var2:"University"});
console.log(result);

dms=JSON.parse(result);
console.log(dms.var1);

let person={
    "name":"Dhairya Shah",
    "Age":20,
    "City":"Ahmedabad"
}
console.log(person);
person.Age=21;
console.log(person);

person["City"]="Surat";
console.log(person);

person.Marks=90;
console.log(person);


/*Data Types Accepted By JSON
1) String 
2) Number
3) Object
4) Array
5) Boolean
6) Null 

Data Types Not Accepted in JSON
1) Undefined
2) a Function
3) a Date
*/

