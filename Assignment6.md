# JS-Quiz4

---
__Q1.What are anonymous functions in JavaScript?__.\
Ans.In JavaScript, an anonymous function is that type of function that has no name or we can say which is without any name. When we create an anonymous function, it is declared without any identifier. It is the difference between a normal function and an anonymous function.








__Q2.Explain strict comparison and Abstract comparison in javascript?__.\
Ans._Abstract Equality Comparison Algorithm_
The comparison x == y, where x and y are values, is performed the following way:

If x and y are of the same type, then:

1. If the type of x is undefined, return true.

2. If the type of x is null, return true.

3. If the type of x is a number, then:
---
If x is NaN, return false.
If y is NaN, return false.
If x is the same number as y, return true.
If x is +0 and y is -0, return true.
If x is -0 and y is +0, return true.
Otherwise, return false.
4. If the type of x is a string, then if x and y are of the same length and the same characters are at the corresponding positions, return true, otherwise, return false.

5. If the type of x is a boolean, if both x and y are true or false, return true, otherwise, return false.

6. If x and y refer to the same object, return true, otherwise, return false.
---
If x is null and y is undefined, return true.
If x is undefined and y is null, return true.
If the type of x is a number and the type of y is a string, return the result of comparison x == ToNumber(y).
If the type of y is a number and the type of x is a string, return the result of comparison ToNumber(x) == y.
If the type of x is a boolean, return the result of the comparison ToNumber(x) == y.
If the type of y is a boolean, return the result of the comparison x == ToNumber(y).
If the type of x is either a string or a number, and the type of y is an object, return the result of comparison x == ToPrimitive(y).
If the type of y is either a string or a number, and the type of x is an object, return the result of comparison ToPrimitive(x) == y.
Otherwise, return false
_Strict Equality Comparison Algorithm_

The comparison x === y, where x and y are values, is performed the following way:

If the type of x is different from the type of y, return false.
If the type of x is undefined, return true.
If the type of x is null, return true.
If the type of x is a number, then:

1. If x is a NaN, return false.

2. If y is a NaN, return false.

3. If x is the same number as y, return true.

4. If x is +0 and y is -0, return true.

5. If x is -0 and y is +0, return true.

6. Otherwise, return false.









__Q3.Difference b/w arrow functions and regular functions?__\
Ans.The syntax of arrow functions:-  |Syntax of regular functions:-


let x = (parameters) => {            |    let x = function function_name(parameters){\
       // body of the function       |                 // body of the function\
        };                           |                   };     \
                                     |
                                     |
Example of arrow functions:-         |   Example of regular functions:-\
  ```javascript
                                     |```javascript

var square = (x) => {                | let square = function(x){\
    return (x*x);                    | return (x*x);\
};                                   | };\
console.log(square(9));              | console.log(square(9));\
    ```                              | ```
                                     |```javascript
```
   |Use of this keyword\
                                     |Unlike regular functions,\
                                     |arrow functions do not \
                                     |have their own this.\
                                     |For example:-\


                                     let user = { \
                                    name: "func", \
                                      func1:() => { \
                                    console.log("hello " + this.name); // no 'this' binding here \
                                      }; \
                                      func2(){   \    
                                    console.log("Welcome to " + this.name); // 'this' binding works here\
                                     }  \
                                    }; \
                                    user.func1(); \
                                    user.func2(); \			    

                                  
				  
|Availability of arguments objects \
                                     |Arguments objects are not available in arrow functions, \
                                     |but are available in regular functions. \
                                   

                                      
                                       Example using regular ():-

                                       let user = {      
                                               show(){
                                          console.log(arguments);
                                              }
                                        };
                                     user.show(1, 2, 3);

                                     Example using arrow ():-

                                      let user = {     
                                          show_ar : () => {
                                          console.log(...arguments);
                                                            }
                                                         };
                                             user.show_ar(1, 2, 3);

                                       Using new keyword
                                        
                                           
					
					   
   |Regular functions created using function declarations \
                                        | or expressions are ‘constructible’ and ‘callable’. \
                                        |Since regular functions are constructible, they can \
                                        |be called using the ‘new’ keyword. However, the \
                                        |arrow functions are only ‘callable’ and not constructible.\
                                        |Thus, we will get a run-time error on trying to construct\
                                        |a non-constructible arrow functions using the new keyword.\
					
				

   |Example using regular function:-
                                        

                                           
                                       let x = function(){
                                               console.log(arguments);
                                             };
                                           new x =(1,2,3);

                                          Example using arrow function:-

                                         let x = ()=> {
                                         console.log(arguments);
                                            };
                                         new x(1,2,3);
                                           
					     


                                            
                                           





















```javascript
```



__Q4.What is Hoisting in JS?__.\
Ans.Hoisting is a mechanism in JavaScript that moves the declaration of variables and functions at the top. So, in JavaScript we can use variables and functions before declaring them. JavaScript hoisting is applicable only for declaration not initialization.















__Q5. What is Garbage Collector in JS?__.\

Ans.The Primary Concept
Reachability is the primary concept of JavaScript memory management. The values that are accessible and usable are known as reachable. Below you will find the set of base reachable values:

Local variables and the current function parameters.
Parameters and variables for other functions on the nested calls’ current chain.
Global variables.
The values above are called the roots.

Other values are known as reachable once they are reachable from a root by a chain of references or a single reference.

Consider an object inside a local variable. If that object has a property that references another object, that object is called reachable. The references are also reachable.

In JavaScript, there exists a background process, called a garbage collector. It is capable of monitoring all objects and removing the ones that have become unreachable.

 Example 

 #### Javascript object reference
```javascript

// book has a reference to the object
let book = {
  name: "Javascript"
};
console.log(book);
```

As you can see, the object reference is depicted by the arrow. The global variable "book" is referencing the object. The "name" property itself stores a primitive.

In case the book value is overwritten, the reference will be lost, as shown below:

 #### Javascript object reference lost
```javascript

// book has a reference to the object
let book = {
  name: "Javascript"
};
book = null;
console.log(book);
```


So, the object becomes unreachable. The garbage collector junks the data, freeing the memory.

A Case of Two References
In this section, let’ consider that the reference was copied from the book to language like this:

 #### Javascript object a case of two reference
```javascript
// book has a reference to the object
let book = {
  name: "Javascript"
};
let language = book;
console.log(language);

```

Now, doing the same will look like this:

 #### Javascript object reference lost
```javascript
// book has a reference to the object
let book = {
  name: "Javascript"
};
let language = book;
console.log(language);
book = null;
console.log(book);

```

---
The object will still be reachable via the language global variable. It’s in the memory. After overwriting the language, it can be deleted.

Internal Algorithms
The main algorithm of the garbage collection is known as “mark-and-sweep”. Regularly some garbage collection steps are performed. Here they are:

The collector takes roots and marks, remembering them.
Afterward, it visits and marks all the references from them.
The next step is visiting the marked objects, marking their references. It is not possible to visit the same object twice, as all the visited objects are remembered.
The process goes on until every reachable reference is visited.
All the objects except for the market objects are deleted.
And, finally, the objects that couldn’t be visited during the process above, are considered unreachable and are going to be removed.

So, the described process of the garbage collection works properly. But, JavaScript includes different optimizations for making them work even better and faster. Among those optimizations are Generational collection, Incremental collection, and Idle-time collection.

Conclusion
Garbage collection is a process that is implemented automatically. It can’t be forced or prevented anyhow.

Objects can be retained in memory while they are reachable.

It’s essential to know that being referenced is not similar to being reachable. Advanced algorithms of garbage collection are performed by modern engines.
















__Q6.Explain Shallow copy vs Deep copy in Javascript?__ \
Ans.A deep copying means that value of the new variable is disconnected from the original variable while a shallow copy means that some values are still connected to the original variable.\

Shallow copy example\
Consider the following example:\
```javascript

let person = {
    firstName: 'Manasvi',
    lastName: 'Aggarwal',
    address: {
        street: 'DR.KN Katju Marg',
        city: 'New Delhi',
        state: 'Delhi',
        country: 'India'
    }
};


let copiedPerson = Object.assign({}, person);

copiedPerson.firstName = 'Monica'; // disconnected

copiedPerson.address.street = 'Pataudi Road'; // connected
copiedPerson.address.city = 'Gurugram'; // connected

console.log(copiedPerson);
```

In this example:\

First, create a new object named person.\
Second, clone the person object using the Object.assign() method.\
Third, change the first name and address information of the copiedPerson object.\
Here is the output:
```javascript

<script>
{
    firstName: 'Monica',
    lastName: 'Aggarwal',
    address: {
        street: 'Pataudi Road',
        city: 'Gurugram',
        state: 'Haryana',
        country: 'India'
    }
}
```

However, when you show the values of the person object, you will find that the address information changed but the first name:\
```javascript

console.log(person);
Output:

{
    firstName: 'Manasvi',
    lastName: 'Aggarwal',
    address: {
        street: 'Pataudi Road',
        city: 'Gurugram',
        state: 'Haryana',
        country: 'India'
    }
}
</>
```

The reason is that the address is reference value while the first name is a primitive value. Both person and copiedPerson references different objects but these objects reference the same address objects.\

Deep copy example\
The following snippet replaces the Object.assign() method by the JSON methods to carry a deep copy the person object:\
```javascript
let person = {
    firstName: 'Manasvi',
    lastName: 'Aggarwal',
    address: {
        street: 'DR.KN Katju Marg',
        city: 'New Delhi',
        state: 'Delhi',
        country: 'India'
    }
};


let copiedPerson = JSON.parse(JSON.stringify(person));

copiedPerson.firstName = 'Monica'; // disconnected

copiedPerson.address.street = 'Pataudi Road';
copiedPerson.address.city = 'Gurugram';

console.log(person);
Output

{
    firstName: 'Manasvi',
    lastName: 'Aggarwal',
    address: {
        street: 'DR.KN Katju Marg',
        city: 'New Delhi',
        state: 'Delhi',
        country: 'India'
    }
}
```

In this example, all values in the copiedPerson object are disconnected from the original person object. In this tutorial, you have learned how to copy objects in JavaScript using either shallow or deep copy.\










__Q7.What is Object.freeze?__\
Ans. The Object. freeze() method freezes an object that prevents new properties from being added to it. This method prevents the modification of existing property, attributes, and values.\












## Program



1.Write a function that generates a random number between two ranges, -100 to 0 and 800 - 900.
```javascript

// Function to generate random number
function randomInTwoRange(min1, max1, min2, max2)
 {
	return Math.random() * (max1 - min1) + min1;
    return Math.random() * (max2 - min2) + min2;
}

document.write("Random Number between -100 to 0 and 800 to 900: ")

// Function call
document.write( randomInTwoRange(-100, 0, 800, 900) );
```
				



