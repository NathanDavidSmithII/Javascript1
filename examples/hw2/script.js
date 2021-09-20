window.onload = function WindowLoad(event) {
let variableName = prompt ("Please enter your favourite motto!");
let greeting = variableName + ", is a great motto, thanks for sharing!";
document.getElementById("output").innerHTML = greeting; 

/*function repeatgreeting(string, times) {
    var greeting = "";
    while (times > 0) {
      greeting += string;
      times--;
    }
    return greeting;
  }*/
  /*let display = "";
  let i = 1;
  while (i<=100)
  { display += i + "<br>";
      i++;
  }    
  document.getElementById("while-output").innerHTML="";
  let display = "";
  for (let i = 1; i <= 100; i++){display += i +"<br>";}
  document.getElementById("for-output").innerHTML="";*/

}