// # Write one Json String into date property and print it in indian standerd time  name age and DOB

var obj=JSON.parse('{"name":"Dhairya Shah","age":20,"DOB":"2003-03-10"}');
console.log(obj.DOB)
console.log(new Date(obj.DOB));