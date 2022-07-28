# JS-Quiz1

---

__Q1.What is JS?__\


Ans.JavaScript (js) is a light-weight object-oriented programming language which is used by several websites for scripting the webpages. It is an interpreted, full-fledged programming language that enables dynamic interactivity on websites when applied to an HTML document. It was introduced in the year 1995 for adding programs to the webpages in the Netscape Navigator browser. Since then, it has been adopted by all other graphical web browsers. With JavaScript, users can build modern web applications to interact directly without reloading the page every time. The traditional website uses js to provide several forms of interactivity and simplicity.
                                                         
__Q2.What is the difference between b/w let and var?__\
Ans.It is similar to the var keyword, but it has some restriction in scoping in comparison of the var keyword. The let keyword can enhance our code readability and decreases the chance of programming error. A variable declared with the let keyword is limited to the block-scoped only.


__Q3.Why do we prefer const over var?__\
Ans.The difference is just that var is for normal variable declaration whose value can be changed, whereas a variable value declared using const keyword cannot be changed.

var declarations are globally scoped or function scoped while let and const are block scoped. var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared. They are all hoisted to the top of their scope.


__Q4. What is the use of javascript in web browsers?__\
Ans. Server Applications
A large number of web applications have a server-side to them. JavaScript is used to generate content and handle HTTP requests. JavaScript can also run on servers through Node.js. The Node.js provides an environment containing the necessary tools required for JavaScript to run on servers.
Web Servers.\
A web server can be created by using Node.js. Node.js is event-driven and not waits for the response of the previous call. The servers created using Node.js are fast and don't use buffering and transfer chunks of data. The HTTP module can be used to create the server by using the createServer() method. This method executes when someone tries to access the port 8080. As a response, the HTTP server should display HTML and should be included in the HTTP header.


__Q5.What are Objects?__\
Ans.A javaScript object is an entity having state and behavior (properties and method). For example: car, pen, bike, chair, glass, keyboard, monitor etc. 

JavaScript is an object-based language. Everything is an object in JavaScript. \

JavaScript is template based not class based. Here, we don't create class to get the object. But, we direct create objects. \



__Q6.What is an array and how is it different from an Object in Javascript?__ \
Ans. Array in JavaScript is an object which is used to represent a collection of similar type of elements. It allows you to store more than one value or a group of values in a single variable name. Arrays are used for storing the collections of values in chronological order. An array is the collection of homogeneous elements, or we can say that array is the collection of values of same data-type.
Both objects and arrays are considered “special” in JavaScript. Objects represent a special data type that is mutable and can be used to store a collection of data (rather than just a single value). Arrays are a special type of variable that is also mutable and can also be used to store a list of values.


__Q7. What is a function?__ \
Ans.It is a mapping in which every element of set A is uniquely associated at the element with set B. The set of A is called Domain of a function and set of B is called Co domain.


__Q8. How can we implement call by value and call by reference in Javascript?__ \
Ans.There is only call by value in java, not call by reference. If we call a method passing a value, it is known as call by value. The changes being done in the called method, is not affected in the calling method.
Example-
```javascript
class Operation{  
 int data=50;  
  
 void change(int data){  
 data=data+100;//changes will be in the local variable only  
 }  
     
 public static void main(String args[]){  
   Operation op=new Operation();  
  
   System.out.println("before change "+op.data);  
   op.change(500);  
   System.out.println("after change "+op.data);  
  
 }  
}  
```


__Q9. What are the primitive data types in Javascript?__ \
Ans.JavaScript primitive data types
There are five types of primitive data types in JavaScript. They are as follows:\ 

Data Type	Description \  
String	        represents sequence of characters e.g. "hello" \  
Number	        represents numeric values e.g. 100 \  
Boolean	        represents boolean value either false or true\  
Undefined	represents undefined value \ 
Null	        represents null i.e. no value at all \ 


Q10.What is DOM?
Ans.According to W3C - "The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document."


__Q11.Why we need DOM?__\
Ans.By the help of document object, we can add dynamic content to our web page.


##PROGRAM- \


__1. Average of array nums in Javascript?__ \
```javascript

	// JavaScript program to calculate average of array elements

	// Function that return average of an array.
	function average(a, n)
	{
	
		// Find sum of array element
		var sum = 0;
		for (var i = 0; i < n; i++) sum += a[i];

		return parseFloat(sum / n);
	}

	// Driver code

	var arr = [10, 2, 3, 4, 5, 6, 7, 8, 9];
	var n = arr.length;

	document.write(average(arr, n));
	document.write("<br>");
	
	// This code is contributed by rdtank.
```

	
__2.Swap two numbers by reference?__

```javascript
// Javascript program to swap two
// numbers  using temporary
// variable

let x = 10, y = 5;

// Code to swap 'x' and 'y'

// x now becomes 15
x = z;

// y becomes 10
y = x ;

// z becomes 5
z = x ;

document.write("After Swapping: x =" + x + ", y=" + y);

// This code is contributed by mukesh07

</script>
3.Print the fibonacci sequence?
<script type = "text/javascript">
function fibonacci(num)
{
	var num1=0;
	var num2=1;
	var sum;
	var i=0;
	for (i = 0; i < num; i++)
	{
		sum=num1+num2;
		num1=num2;
		num2=sum;
	}
	return num2;
}

document.write("Fibonacci(5): "+fibonacci(5)+"<br>");
document.write("Fibonacci(8): "+fibonacci(8)+"<br>");
```

	
	
__4. Sort an array by both ascending and descending order?__
```javascript
const points = [40, 100, 1, 5, 25, 10];

// Sort the numbers in ascending order
points.sort(function(a, b){return a-b});

let lowest = points[0];
```

```javascript
const points = [40, 100, 1, 5, 25, 10];

// Sort the numbers in descending order:
points.sort(function(a, b){return b-a});

let lowest = points[0];
```

__5.Show a variable value in an HTML webpage using DOM?__
```javascript

        function myGeeks() {
            var g = document.getElementById("GFG");
            g.style.color = "red";
            g.style.fontSize = "25px";
        }
```

```javascript

        function myGeeks() {
            var g = document.createElement("VAR");
            var text = document.createTextNode("GeeksForGeeks Variable");
            g.appendChild(text);
            document.body.appendChild(g);
        }
   ```

	
	
# JS-Quiz2

	
__Q1.Why do we use functions in JS?__ \
Ans. JavaScript provides functions similar to most of the scripting and programming languages. In JavaScript, a function allows you to define a block of code, give it a name and then execute it as many times as you want. A JavaScript function can be defined using function keyword.

	
__Q2. What is Function Invocation?__ \
Ans.The code inside a function is not executed when the function is defined. The code inside a function is executed when the function is invoked. It is common to use the term "call a function" instead of "invoke a function". It is also common to say "call upon a function", "start a function", or "execute a function".

	
__Q3.Does a function behave like an object in Javascript? Prove it by an example.__ \
Ans.In JavaScript, functions are called Function Objects because they are objects. Just like objects, functions have properties and methods, they can be stored in a variable or an array, and be passed as arguments to other functions.
Example-
```javascript

function message() {
    console.log("Greetings Linda!");
}

console.log(typeof message);               // => function
console.log(message instanceof Object);    // => true
```

	
__Q4.What are Events in Javascript?__ \
Ans.JavaScript's interaction with HTML is handled through events that occur when the user or the browser manipulates a page. When the page loads, it is called an event. When the user clicks a button, that click too is an event.

	
__Q5.What is a String?__ \
Ans.The JavaScript string is an object that represents a sequence of characters.

	
__Q6.What is an array? Is it static or dynamic in Javascript?__ \
Ans.An array is a collection of similar data elements stored at contiguous memory locations.Dynamic Array in JavaScript means either increasing or decreasing the size of the array automatically. JavaScript is not typed dependent so there is no static array. JavaScript directly allows array as dynamic only. We can perform adding, removing elements based on index values.

	
__Q7.Difference between Map and Set?__ \
Ans.The difference is set is used to store only keys while map is used to store key value pairs. For example consider in the problem of printing sorted distinct elements, we use set as there is value needed for a key. While if we change the problem to print frequencies of distinct sorted elements, we use map.

	
__Q8.Difference between Array and Map.__ \
Ans.An array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together. This makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of the first element of the array (generally denoted by the name of the array.

A map is an associative container that stores elements in a mapped fashion. Each element has a key value and a mapped value. No two mapped values can have equal key values.

	
__Q9.What are array methods? List a few names?__ \
Ans. Method	Description \
concat()	joins two or more arrays and returns a result \
indexOf()	searches an element of an array and returns its position \
find()	        returns the first value of an array element that passes a test \
findIndex()	returns the first index of an array element that passes a test \
forEach()	calls a function for each element \
includes()	checks if an array contains a specified element \
push()	        adds a new element to the end of an array and returns the new length of an array \
unshift()	adds a new element to the beginning of an array and returns the new length of an array \
pop()	        removes the last element of an array and returns the removed element \
shift()	        removes the first element of an array and returns the removed element \
sort()	        sorts the elements alphabetically in strings and in ascending order \
slice() 	selects the part of an array and returns the new array \
splice()	removes or replaces existing elements and/or adds new elements \

__Q10.In how many ways can we traverse through an array in Javascript?__ \
Ans.There are multiple ways one can iterate over an array in Javascript. The most useful ones are mentioned below. \
__1.Using for loop.__ \
This is similar to for loops in other languages like C/C++, Java, etc.  \
 __2.Using while loop.__ \
This is again similar to other languages. \
__3.Using forEach method.__ \ 
The forEach method calls the provided function once for every array element in the order. \
__4.Using every method.__ \ 
The every() method checks if all elements in an array pass a test (provided as a function). \
__5.Using map.__ \ 
A map applies a function over every element and then returns the new array. \
 __6.Using Filter__ \
It is used to filter values from an array and return the new filtered array. \
__7.Using Reduce__ \
It is used to reduce the array into one single value using some functional logic. \
__8.Using Some__ \
It is used to check whether some array values passes a test. \

	
## PROGRAMS

	
1.Reverse an array? Input: [1, 2, 3, 4, 5, 6]
        ```javascript
var arr = [0, 1, 2, 3].reverse();
         document.write("Reversed array is : " + arr );
	 ```


	
2.Explain the properties of the join array method function via program?
```javascript
function func() {
	 var a = [ 1, 2, 3, 4, 5, 6 ];
	document.write(a.join('|'));
}
func();
```


	
3.Show all the values of an array in a html webpage using DOM and forEach method?
a)DOM method
```javascript
document. querySelectorAll('[class="box"]')
```

b)forEach()method
```javascript

	// JavaScript to illustrate forEach() method
	function func() {
	
		// Original array
		const items = [12, 24, 36];
		const copy = [];

		items.forEach(function (item) {
			copy.push(item + item+2);
		});

		document.write(copy);
	}
	func();
```
					

	
4.Merge to sets in javascript? (hint use Set class in javascript)
```javascript
const set1 = new Set(['one']);
const set2 = new Set(['two']);
const set3 = new Set(['three']);

const set4 = new Set([...set1, ...set2, ...set3]);
console.log(set4); //  {'one', 'two', 'three'}
```
```javascript
```

	
# JS-Quiz3

	
__Q1.Explain as much as you know about objects in javascript?__ \
Ans.A javaScript object is an entity having state and behavior (properties and method). For example: car, pen, bike, chair, glass, keyboard, monitor etc. \

JavaScript is an object-based language. Everything is an object in JavaScript. \

JavaScript is template based not class based. Here, we don't create class to get the object. But, we direct create objects. \
There are 3 ways to create objects. \

By object literal \
By creating instance of Object directly (using new keyword) \
By using an object constructor (using new keyword) \
JavaScript Object Methods \
The various methods of Object are as follows: \ 


S.No	Methods	Description \ 
1.Object.assign() \ 
This method is used to copy enumerable and own properties from a source object to a target object. \ 
2.Object.create() \ 
This method is used to create a new object with the specified prototype object and properties.\ 
3.Object.defineProperty() \ 
This method is used to describe some behavioral attributes of the property.\ 
4.Object.defineProperties() \ 
This method is used to create or configure multiple object properties. \ 
5.Object.entries() \ 
This method returns an array with arrays of the key, value pairs. \ 
6.Object.freeze() \ 
This method prevents existing properties from being removed.\  
7.Object.getOwnPropertyDescriptor() \  
This method returns a property descriptor for the specified property of the specified object. \ 
8.Object.getOwnPropertyDescriptors() \ 
This method returns all own property descriptors of a given object. \ 
9.Object.getOwnPropertyNames() \ 
This method returns an array of all properties (enumerable or not) found. \  
10.Object.getOwnPropertySymbols() \  
This method returns an array of all own symbol key properties.\ 
11.Object.getPrototypeOf() \ 
This method returns the prototype of the specified object. \ 
12.Object.is() \ 
This method determines whether two values are the same value. &nbsp; 
13.Object.isExtensible()\ 
This method determines if an object is extensible &nbsp; 
14.Object.isFrozen() \ 
This method determines if an object was frozen. &nbsp; 
15.Object.isSealed() \ 
This method determines if an object is sealed. &nbsp; 
16.Object.keys()\ 
This method returns an array of a given object's own property names. &nbsp; 
17.Object.preventExtensions() \  
This method is used to prevent any extensions of an object. &nbsp; 
18.Object.seal() \  
This method prevents new properties from being added and marks all existing properties as non-configurable. &nbsp; 
19.Object.setPrototypeOf() \  
This method sets the prototype of a specified object to another object. &nbsp; 
20.Object.values() \  
This method returns an array of values. \ 

	
__Q2.Read the code :__
```javascript

// This is an object based vector template
var vector = {
_x: 0,
_y: 0,
create: function(x,y){
var obj = Object.create(this);
obj.setX(x);
obj.setY(y);
return obj;
},
}
``` 

__Q3.Can you make a “class” based alternative to it? Using Javascript OOP features.__
Ans. 
```javascript

var vector = {
constructor(_x: 0,
_y: 0),
create: function(x,y){
var obj = Object.create(this);
obj.setX(x);
obj.setY(y);
return obj;
},
}
```

__Q3.Do you think javascript is the language of the future?__ \
Ans.JavaScript has become integral to the Internet experience as developers build increased interaction and complexity into their applications. Search engines, ecommerce, content management systems, responsive design, social media and phone apps would not be possible without it.

	
## PROGRAM

	
__1.Write code implementations of arr methods-__ \
__a)forEach() method__ \
```javascript
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"
```

__b)map__ \
```javascript

	// JavaScript to illustrate map() method
	function func() {
		// Original array
		var arr = [14, 10, 11, 00];

		// new mapped array
		var new_arr = arr.map(Math.sqrt);
		document.write(new_arr);
	}
	func();
```


__c)filter__ 
```javascript

	// JavaScript to illustrate findIndex() method
	function canVote(age) {
		return age >= 18;
	}

	function func() {
		var filtered = [24, 33, 16, 40].filter(canVote);
		document.write(filtered);
	}
	func();
```
				

__d)reduce__
```javascript
const numbers = [175, 50, 25];

document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}
```


__e)include__
```javascript
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false
```

__f)some__
```javascript
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true
```

__g)every__
```javascript

	// JavaScript code for every() method
	function isEven(element, index, array) {
		return element % 2 == 0;
	}
function func() {
		var arr = [56, 92, 18, 88, 12];

		// Check for even number
		var value = arr.every(isEven);
		document.write(value);
	}
	func();
```

	
	
__2.Simple Array Implementation__
```javascript
const cars = ["Saab", "Volvo", "BMW"];
```

__3.TODO List Question__
```javascript
function event_handler(e) {

	console.log(e.target.tagName);
	
	if (e.target.tagName == "LI") 
	{
	
	   e.target.classList.add("completed");
	
	}
	
	else if (e.target.tagName == "SPAN")
	 {
	
	    e.target.parentNode.remove();
	
	}
	
	else 
	{
	
	    console.log("Unknown TagName: " + e.target.tagName)
	
	}
		
}
document.getElementsByClassName('todo-list')[0].addEventListener('click', event_handler);

function add_new_item()
{
	const list = document.getElementsByClassName('todo-list')[0];

	const  item = document.createElement('li');
		
	item.classList.add('todo-item');

	const spantag = document.createElement('span');

	spantag.classList.add('remove');

	const input_field = document.getElementById('new-itemtext').value;

	item.innerHTML = input_field;


	item.appendChild(spantag);

	console.log(item);

	list.appendChild(item);

	document.getElementById('new-item-text').value = '';
		
}

    document.getElementById('add-item').addEventListener('click', () => {

    console.log("the plus sign Pressed");
	
    add_new_item();
	
	});

document.getElementById('new-itetext').addEventListener('keydown', (e) => {
  if (e.key == 'Enter' || e.keyCode == 13) {
		
  console.log("key " + e.keyCode + " Pressed in Text Field!");
		add_new_item();
		
  }
});

```

