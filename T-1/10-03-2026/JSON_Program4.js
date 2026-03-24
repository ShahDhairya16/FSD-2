//Write a Json obj which contains array of 3 objects each object contains 3 props name and age 
//now sort an array values by age in decending order. print name and ag in terminal as per sorted age

var obj=[
        {
            "name":"John",
            "age":30
        },
        {
            "name":"Alice",
            "age":25
        },
        {
            "name":"Bob",
            "age":35
        },
    ]

var sorted_obj=obj.sort((a,b)=>(b.age-a.age));
console.log(sorted_obj);
