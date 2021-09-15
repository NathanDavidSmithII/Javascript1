window.onload = function WindowLoad(event) {
let display = "";
let i = 1;
while (i<=100)
{ display += i + "<br>";
    i++;
}    
document.getElementById("while-output").innerHTML="";
let display = "";
for (let i = 1; i <= 100; i++){display += i +"<br>";}
document.getElementById("for-output").innerHTML="";
}