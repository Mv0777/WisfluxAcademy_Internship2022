# TS-Quiz1
---
__Q1.What are the basic data types in TypeScript?__.\
Ans. 
Primitive types
The following illustrates the primitive types in TypeScript:

Name	 |Description.\
string	 |represents text data.\
number	 |represents numeric values.\
boolean	 |has true and false values.\
null	 |has one value: null.\
undefined|	has one value: undefined. It is a default value of an uninitialized variable.\
symbol	 |represents a unique constant value.\
__Q2.What is Generic data type?__.\
Ans. 
 ### Generic
 ---
Generic is used to create a component which can work with a variety of data type rather than a single one. It allows a way to create reusable components. It ensures that the program is flexible as well as scalable in the long term. TypeScript uses generics with the type variable <T> that denotes types. The type of generic functions is just like non-generic functions, with the type parameters listed first, similarly to function declarations.

#### Example
```javascript
function identity<T>(arg: T): T {  
    return arg;  
}  
let output1 = identity<string>("myString");  
let output2 = identity<number>( 100 );  
```
__Q3.What is type inferring in TS?__.\
Ans.
### TypeScript Type Inference
---
TypeScript Type Inference

Type inference describes where and how TypeScript infers types when you don’t explicitly annotate them.

#### Basic type inference
When you declare a variable, you can use a type annotation to explicitly specify a type for it.
 For example:
```javascript
let counter: number;
```
However, if you initialize the counter variable to a number, TypeScript will infer the type the counter to be number. For example:
```javascript
let counter = 0;
```

It is equivalent to the following statement:
```javascript
let counter: number = 0;
```
Likewise, when you assign a function parameter a value, TypeScript infers the type of the parameter to the type of the default value. For example:
```javascript
function setCounter(max=100) {
    // ...
}
```

In this example, TypeScript infers type of the max parameter to be number.

Similarly, TypeScript infers the following return type of the increment() function as number:
```javascript
function increment(counter: number) {
    return counter++;
}
```
It is the same as:
```javascript
function increment(counter: number) : number {
    return counter++;
}
```

The best common type algorithm
Consider the following assignment:
```javascript
let items = [1, 2, 3, null];
```

To infer the type of items variable, TypeScript needs to consider the type of each element in the array.

It uses the best common type algorithm to analyze each candidate type and select the type that is compatible with all other candidates.

In this case, TypeScript selects the number array type (number[]) as the best common type.

If you add a string to the items array, TypeScript will infer the type for the items as an array of numbers and strings:
```javascript
(number | string)[]

let items = [0, 1, null, 'Hi'];
```
When TypeScript cannot find the best common type, it returns the union array type.
 For example:
```javascript

let arr = [new Date(), new RegExp('\d+')];
```
In this example, TypeScript infers the type for arr to be (RegExp | Date)[].

Contextual typing
TypeScript uses locations of variables to infer their types. This mechanism is known as contextual typing.
 For example:
```javascript

document.addEventListener('click', function (event) {
    console.log(event.button); // 
});
```
In this example, TypeScript knows that the event parameter is an instance of MouseEvent because of the click event.

However, when you change the click event to the scroll event, TypeScript will issue an error:
```javascript

document.addEventListener('scroll', function (event) {
    console.log(event.button); // compiler error
});
```
Error:
```javascript

Property 'button' does not exist on type 'Event'.(2339)
```
TypeScript knows that the event in this case, is an instance of UIEvent, not a MouseEvent. And UIEvent does not have the button property, therefore, TypeScript throws an error.

You will find contextual typing in may cases such as arguments to function calls, type assertions, members of objects and array literals, return statements, and right-hand sides of assignments.

Type inference vs. Type annotations
The following show the difference between type inference and type annotations:

Type inference	Type annotations
TypeScript guesses the type	You explicitly tell TypeScript the type
So, when do you use type inference and type annotations?

In practice, you should always use the type inference as much as possible. And you use the type annotation in the folowing cases:

When you declare a variable and assign it a value later.
When you want a variable that can’t be inferred.
When a function returns the any type and you need to clarify the value.
Summary
Type inference occurs when you initialize variables, set parameter default values, and determine function return types.
TypeScript uses the best common type algorithm to select the best candidate types that are compatible with all variables.
TypeScript also uses contextual typing to infer types of variables based on the locations of the variables
__Q4.What are the possible ways to define typing for functions?__.\
Ans.
### TypeScript Function Types

Introduction to TypeScript function types
A function type has two parts: parameters and return type. When declaring a function type, you need to specify both parts with the following syntax:
```php
(parameter: type, parameter:type,...) => type
```
The following example shows how to declare a variable which has a function type that accepts two numbers and returns a number:
```javascript
let add: (x: number, y: number) => number;
```

In this example:

The function type accepts two arguments: x and y with the type number.
The type of the return value is number that follows the fat arrow (=>) appeared between parameters and return type.
Note that the parameter names (x and y) are just for readability purposes. As long as the types of parameters match, it is a valid type for the function.

Once annotating a variable with a function type, you can assign the function with the same type to the variable.

TypeScript compiler will match the number of parameters with their types and the return type.

The following example shows how to assign a function to the add variable:
```javascript
add = function (x: number, y: number) {
    return x + y;
};
```

Also, you can declare a variable and assign a function to a variable like this:
```javascript
let add: (a: number, b: number) => number =
    function (x: number, y: number) {
        return x + y;
    };
```

If you assign other functions whose type doesn’t match to the add variable, TypeScript will issue an error:
```javascript
add = function (x: string, y: string): number {
    return x.concat(y).length;
};
```
In this example, we reassigned a function, whose type doesn’t match, to the add function variable.

Inferring function types
TypeScript compiler can figure out the function type when you have the type on one side of the equation. This form of type inference is called contextual typing. For example:


In this example, the add function will take the type
```javascript
 (x: number, y:number) => number.
```

By using the type inference, you can significantly reduce the amount of code with annotations.


__Q5.How to define Generic type for Classes?__.\
Ans.
### Generics Classes
TypeScript also supports generic classes. The generic type parameter is specified in angle brackets (<>) following the name of the class. A generic class can have generic fields or methods.

Example
```javascript
class StudentInfo<T,U>  
{   
    private Id: T;  
    private Name: U;  
    setValue(id: T, name: U): void {   
        this.Id = id;  
        this.Name = name;  
    }  
    display():void {   
        console.log(`Id = ${this.Id}, Name = ${this.Name}`);  
    }  
}  
let st = new StudentInfo<number, string>();  
st.setValue(101, "Virat");  
st.display();  
let std = new StudentInfo<string, string>();  
std.setValue("201", "Rohit");  
std.display();  
```
### Generic Classes
Classes, much like interfaces, can be generic. When a generic class is instantiated with new, its typeparameters are inferred the same way as in a function call:
```javascript
classBox<Type> {
    contents: Type;
    constructor(value: Type) 
    {this.contents = value;  
        }
    }
    constb = newBox("hello!");
    const b: Box<string>
```

Classes can use generic constraints and defaults the same way as interfaces.
Type Parameters in Static MembersThis code isn't legal, and it may not be obvious why:
```javascript
classBox<Type>
 {staticdefaultValue: Type;
  Static members cannot reference class type parameters.
  }
  ```

  
Remember that types are always fully erased! At runtime, there's only oneBox.defaultValueproperty slot.
 This means that setting Box<string>.defaultValue (if that were possible) would also change Box<number>.defaultValue - not good. 
 The static members of a generic classcan never refer to the class's type parameters.

 ## Program

Define the types in typescript for the given following JavaScript code.
 ```javascript
 Todo:-Define type/interface for a single Todo object.
 -Define type for each function.
 -Do not use `any` (TS Data Type) type of typescript.
 Code: var todos = [];
 function add(name, description)
 {return todos.push
 ({name: name,
 description: description,
 done: false});
}function remove(index)
 {return todos.splice(index, 1)
 ;}function list()
 {todos.forEach(function(todo, index) 
 {console.log(index + " -" + todo.name)
 ;});}
 function update(index, name, description) 
 {todos[index].name = name;
 todos[index].description = description;return todos[index];}
 ```
 ```javascript 
 interface ITodo {
  name: string;
  description: string;
  done: boolean;
}

var todos: ITodo[] = [];
function add(name: string, description: string): number {
  return todos.push({ name: name, description: description, done: false });
}
function remove(index: number): ITodo[] {
  return todos.splice(index, 1);
}
function list(): void {
  todos.forEach(function (todo, index) {
    console.log(index + " -" + todo.name);
  });
}

function update(index: number, name: string, description: string): ITodo {
  todos[index].name = name;
  todos[index].description = description;
  return todos[index];
}
 ```
 
