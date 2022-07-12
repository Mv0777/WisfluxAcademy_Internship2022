//Q1.WAP to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
const a=5;
const b=6;
const c=7;
 
area = 0.5*a*b;
console.log(area);
//Q2.WAP to calculate multiplication and division of two numbers(input from user).
<form>
1st Number : <input type="text" id="firstNumber" /><br>
2nd Number: <input type="text" id="secondNumber" /><br>
<input type="button" onClick="multiplyBy()" Value="Multiply" />
<input type="button" onClick="divideBy()" Value="Divide" />
</form>
<p>The Result is : <br>
<span id = "result"></span>
</p>
function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}


 <html>
    <head>
        <title> Multiply and Divide</title>
    </head>
    <body><form>
        number1:<input type="number" name="number1" id="number1" placeholder="Enter your number"></input>
        number2:<input type="number" name="number2" id="number2" placeholder="Enter your number"></input>
        <button type="BUTTON" >MULTIPLY (*)</button>
        <button type="BUTTON" >DIVIDE (/) </button>
        </form>
        The Result is:
        </body>
</html> 
<script>
var number1  ;
var number2  ;
multiply = number1*number2;
divide = number1/ number2;
console.log(multiply);
console.log(divide);</script>

/*Q3.Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
[Formula : c/5=(f-32)/9[where c = temperature in Celsius and f=temperature in Fahrenheit]
 Expected Output: 60°C is 140°F ,45°F is 7.222222222222222°C]*/


var c = 60 ;
var f = 45 ;
var x = 5/9*(f -32)
console.log(x);
var y = (9/5*c)+32
console.log(y);

 /*Q4.Write a JS program to get the difference between a given number and 13, 
 if the number is greater than 13 return double the absolute difference. */
 var a = 12;
 var b = 13;
  
 difference = (a - b) ;
 if (a>b){
     console.log( 2*difference);
 }
 else{
     console.log( difference);
 }
 //Q5. Write a JS program to find the largest of three given integers.
var a=9;
var b=8;
var c=7;
  
 if (a>b && b>c)
 {
 console.log(a);}
 else if (b>a && b>c)
 {console.log(b);}

 else 
 {console.log(c);}

 /*Q6.Write a JS program to check the total marks of a student in various examinations.
The student will get A+ grade if the total marks are in the range 89..100 inclusive,
if the examination is "Final-exam." the student will get A+ grade and total marks
must be greater than or equal to 90.Return true if the student get A+ grade or 
false otherwise.*/
function exam_status(totmarks,is_exam)
  {
  if (is_exam) {
    return totmarks >= 90;
  }
 return (totmarks >= 89 && totmarks <= 100);
 }

console.log(exam_status("78", " "));
console.log(exam_status("89", "true "));
console.log(exam_status("99", "true "));
/*var totalmarks;
var exam;
if(89 => totalmarks >=100 && exam =='Final-exam'){
console.log(A);
}*/