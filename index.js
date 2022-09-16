//Your Code here

let response = window.prompt("Do you head left or right?").toLowerCase();
console.log(response);

if(response === "left"){
 // we run logic for the left response.
 console.log("user sumbitted left")
 
 let response2 = window.prompt("Do you go up or down?").toLowerCase();

 if(response2 === "up"){
 console.log("entered up")
 }
  else if(response2 === "down"){
    console.log("entered down");
  }

}
else if(response === "right"){
// we run logic for the right response.
console.log("user sumbitted right")
}
else{
// show error or ask question again.
console.log("error")
}