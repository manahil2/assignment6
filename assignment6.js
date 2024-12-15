let var1 = 20;
document.write("Result:<br>");
document.write("The value of a is "+var1+"<br><br>");
document.write("............................<br><br>");
document.write("The value of ++a is "+ ++var1+"<br>");
document.write("Now the value of a is  " +var1+"<br><br>");
document.write("The value of a++ is "+var1+++"<br>");
document.write("Now the value of a is  " +var1+"<br><br>");
document.write("The value of --a is "+ --var1+"<br>");
document.write("Now the value of a is  " +var1+"<br><br>");
document.write("The value of a-- is "+var1-- +"<br>");
document.write("Now the value of a is  " +var1+"<br><br>");

//2
var a = 2, b = 1; 
var result = --a - --b + ++b + b--; //1-0+1+1
document.write("Value of a is "+ a +"<br>"); //1
document.write("Value of b is "+ b + "<br>")//0
document.write("Result is " + result + "<br><br>");

//3
let name = prompt("Enter Your name:");
alert("Helloo! "+name + " Welcomee!");

//4
let number = prompt("Enter a number:");
if(number==null || number == ""){
    number = 5;
}
else {
    number = parseInt(number);  // Convert input to a number
}
for (let i=1 ; i<=10 ; i++){
    let multiplication = number * i;
   document.write(number+" x "+i+" = "+ multiplication+"<br>");
}

//5
let sub1 = prompt("Subject 1");
let sub2 = prompt("Subject 2");
let sub3 = prompt("Subject 3");

let totalmarks = 100;

let obtained1 = parseInt(prompt("Enter obtained marks in subject1"));
let obtained2 = parseInt(prompt("Enter obtained marks in subject2"));
let obtained3 = parseInt(prompt("Enter obtained marks in subject3"));

let percentage1 = (obtained1 * 100) / totalmarks;
let percentage2 = (obtained2 * 100) / totalmarks;
let percentage3 = (obtained3 * 100) / totalmarks;

let totalObtainedMarks = obtained1 + obtained2 + obtained3;
let totalPossibleMarks = totalmarks * 3;
let overallPercentage = (totalObtainedMarks * 100) / totalPossibleMarks;

document.write("<h1>Subject Marks and Percentage</h1>");
document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + sub1 + "</td><td>" + totalmarks + "</td><td>" + obtained1 + "</td><td>" + percentage1.toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + sub2 + "</td><td>" + totalmarks + "</td><td>" + obtained2 + "</td><td>" + percentage2.toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + sub3 + "</td><td>" + totalmarks + "</td><td>" + obtained3 + "</td><td>" + percentage3.toFixed(2) + "%</td></tr>");
document.write("<tr><td><b>Total</b></td><td><b>" + totalPossibleMarks + "</b></td><td><b>" + totalObtainedMarks + "</b></td><td><b>" + overallPercentage.toFixed(2) + "%</b></td></tr>");
document.write("</table>");


