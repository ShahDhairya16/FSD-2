// Write Node Js program using fs module (Synchronous) to manage Students data.The program should be able to perform following operations:
// 1. Create a directory named StudentData.Inside the directory create a json file named students.json containing students records with name and marks(Array of 3 objects).
// 2. Read the Json file convert it into java script object and display all the student record in the console.
// 3. Display Students who scored mode than 75 marks using loop and condition.
// 4. Finally remove the file and directory. 

var ps = require("fs")
// ps.mkdirSync("StudentData");
// let students = [
//     {"name": "John", "marks": 80},
//     {"name": "Jane", "marks": 90},
//     {"name": "Doe", "marks": 70}
// ]
// ps.writeFileSync("StudentData/students.json", JSON.stringify(students));
let data = ps.readFileSync("StudentData/students.json", "utf-8");
let studentData = JSON.parse(data);
console.log(studentData);

// for (let i = 0; i<studentData.length; i++) {
//     if (studentData[i].marks > 75) {
//         console.log(studentData[i]);
//     }
// }

// for (s of data){
//     if (s.marks > 75) {
//         console.log(s.name+" "+s.marks);
//     }
//}
ps.unlinkSync("StudentData/students.json");
ps.rmdirSync("StudentData");