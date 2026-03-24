function main(b){
    console.log("Task 1 completed successfully");
    setTimeout(function(){
        callback("Operation Completed");},2000);
    console.log("Task 2 completed successfully");
}

function callback(result){
    console.log("Result: "+result);
}
main(callback);

message = function(){
    console.log("Print after 3 seconds");
}
setTimeout(message,3000);

setTimeout(function(){
    console.log("Print after 5 seconds");
},5000);

setTimeout(() => {
    console.log("Print after 2 seconds");
},2000);