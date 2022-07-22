# TS-Quiz2
---
\
__Q1.What is NodeJS?__.\
Ans.Node.js is a cross-platform environment and library for running JavaScript applications which is used to create networking and server-side applications.
\
__Q2.What is V8 Engine?__.\
Ans.V8 is an open source JavaScript engine developed by the Chromium project for the Google Chrome web browser. It is written in C++. Now a days, it is used in many projects such as Couchbase, MongoDB and Node. js.
\
__Q3.What is Event Loop in NodeJS.__.\
Ans.It means as soon as Node starts its server, it simply initiates its variables, declares functions and then simply waits for event to occur. It is the one of the reason why Node. js is pretty fast compared to other similar technologies.
\
__Q4.What is the use of tsconfig.json file?__.\
Ans.The tsconfig. json file specifies the root files and the compiler options required to compile the project. JavaScript projects can use a jsconfig. json file instead, which acts almost the same but has some JavaScript-related compiler flags enabled by default.
The tsconfig. json file is a file which is in JSON format. In the tsconfig. json file, we can specify various options which tell the compiler how to compile the current project.

__Q5.What are the methods provided by `fs` module to manipulate files__.\
Ans. 
### Node.js File System (FS)
---
In Node.js, file I/O is provided by simple wrappers around standard POSIX functions. Node File System (fs) module can be imported using following syntax:

Syntax:
```javascript
var fs = require("fs")  
```
Node.js FS Reading File
Every method in fs module has synchronous and asynchronous forms.

Asynchronous methods take a last parameter as completion function callback. Asynchronous method is preferred over synchronous method because it never blocks the program execution where as the synchronous method blocks.



Let's take an example:

Create a text file named "input.txt" having the following content.

File: input.txt

Javatpoint is a one of the best online tutorial website to learn different technologies  
 in a very easy and efficient manner.  
Let's take an example to create a JavaScript file named "main.js" having the following code:

File: main.js
```javascript
var fs = require("fs");  
// Asynchronous read  
fs.readFile('input.txt', function (err, data) {  
   if (err) {  
       return console.error(err);  
   }  
   console.log("Asynchronous read: " + data.toString());  
});  
// Synchronous read  
var data = fs.readFileSync('input.txt');  
console.log("Synchronous read: " + data.toString());  
console.log("Program Ended");  
```
Open Node.js command prompt and run the main.js:
```javascript
node main.js  
```
Node.js file system 1
Node.js Open a file
Syntax:

Following is the syntax of the method to open a file in asynchronous mode:
```javascript

fs.open(path, flags[, mode], callback)  
```
Parameter explanation:

Following is the description of parameters used in the above syntax:

path: This is a string having file name including path.

flags: Flag specifies the behavior of the file to be opened. All possible values have been mentioned below.

mode: This sets the file mode (permission and sticky bits), but only if the file was created. It defaults to 0666, readable and writeable.


callback: This is the callback function which gets two arguments (err, fd).

Node.js Flags for Read/Write
Following is a list of flags for read/write operation:

Flag	Description \
r	open file for reading. an exception occurs if the file does not exist. \
r+	open file for reading and writing. an exception occurs if the file does not exist. \
rs	open file for reading in synchronous mode. \
rs+	open file for reading and writing, telling the os to open it synchronously. see notes for 'rs' about using this with caution. \
w	open file for writing. the file is created (if it does not exist) or truncated (if it exists). \
wx	like 'w' but fails if path exists. \
w+	open file for reading and writing. the file is created (if it does not exist) or truncated (if it exists). \
wx+	like 'w+' but fails if path exists. \
a	open file for appending. the file is created if it does not exist. \
ax	like 'a' but fails if path exists. \
a+	open file for reading and appending. the file is created if it does not exist. \
ax+	open file for reading and appending. the file is created if it does not exist. \
Create a JavaScript file named "main.js" having the following code to open a file input.txt for reading and writing. \


File: main.js
```javascript
var fs = require("fs");  
// Asynchronous - Opening File  
console.log("Going to open file!");  
fs.open('input.txt', 'r+', function(err, fd) {  
   if (err) {  
       return console.error(err);  
   }  
  console.log("File opened successfully!");       
});  
```
Open Node.js command prompt and run the main.js:
```javascript

node main.js  
```

Node.js file system 2 \
Node.js File Information Method \
Syntax: \

Following is syntax of the method to get file information. \
```javascript

fs.stat(path, callback)  
```

Parameter explanation: \

Path: This is string having file name including path. \

Callback: This is the callback function which gets two arguments (err, stats) where stats is an object of fs.Stats type. \

Node.js fs.Stats class Methods \
Method	Description \
stats.isfile()	returns true if file type of a simple file. \
stats.isdirectory()	returns true if file type of a directory. \
stats.isblockdevice()	returns true if file type of a block device. \
stats.ischaracterdevice()	returns true if file type of a character device. \
stats.issymboliclink()	returns true if file type of a symbolic link. \
stats.isfifo()	returns true if file type of a fifo. \
stats.issocket()	returns true if file type of asocket. \
Let's take an example to create a JavaScript file named main.js having the following code: \

File: main.js \
```javascript


var fs = require("fs");  
console.log("Going to get file info!");  
fs.stat('input.txt', function (err, stats) {  
   if (err) {  
       return console.error(err);  
   }  
   console.log(stats);  
   console.log("Got file info successfully!");  
   // Check file type  
   console.log("isFile ? " + stats.isFile());  
   console.log("isDirectory ? " + stats.isDirectory());      
});  
```
Now open the Node.js command prompt and run the main.js
```javascript

node main.js  
```
\
__Q6.What is API?__.\
Ans.API is the abbreviation of the term Application Programming Interface. It is the software responsible for the connection for the communication and information exchange between two apps. API connects two devices or programs in order to facilitate the exchange of information between them. It is the interface that serves the other parts of the software. The API specifications are the standards or documents designed to describe the creation of such connections. If a computer system meets these standards, then it is said to expose an API. The specification or implementation both are known as the API.

\
__Q7.What is JSON format?__.\
Ans.
1.JSON stands for JavaScript Object Notation. \
2.JSON is an open standard data-interchange format. \
3.JSON is lightweight and self-describing. \
4.JSON originated from JavaScript. \
5.JSON is easy to read and write. \
6.JSON is language independent. \
7.JSON supports data structures such as arrays and objects. \
### Features of JSON \
1.Simplicity \
2.Openness \
3.Self-Describing \
4.Internationalization \
5.Extensibility \
6.Interoperability \
\
__Q8.Why we use JSON format for API?__.\
Ans.Since JSON is an easy-to-use, lightweight language data interchange format in comparison to other available options, it can be used for API integration. Following are the advantages of JSON: \

1.Less Verbose: In contrast to XML, JSON follows a compact style to improve its users' readability. While working with a complex system, JSON tends to make substantial enhancements. \
2.Faster: The JSON parsing process is faster than that of the XML because the DOM manipulation library in XML requires extra memory for handling large XML files. However, JSON requires less data that ultimately results in reducing the cost and increasing the parsing speed. \
3.Readable: The JSON structure is easily readable and straightforward. Regardless of the programming language that you are using, you can easily map the domain objects.\
4.Structured Data: In JSON, a map data structure is used, whereas XML follows a tree structure. The key-value pairs limit the task but facilitate the predictive and easily understandable model.\
__Q9.What is a Framework?__ \
Ans.
As Express is a lightweight, minimal and flexible Node.js web application framework, it provides a robust set of features for web and mobile applications.
 Following is the list of some distinctive features of this framework:

1.js can be used to design single-page, multi-page, and hybrid web applications and APIs.\
2.It allows to set up middleware to respond to HTTP/RESTful Requests.\
3.It defines a routing table to perform different HTTP operations (method and URL).\
4.It allows to dynamically rendering HTML Pages based on passing arguments to templates.\
5.It provides high performance because of its ultra-fast I/O. It prepares a thin layer; therefore, the performance is adequate.\
6.Its MVC-like structure makes it organize the web application into MVC architecture.\
7.It provides good database support. It supports RDBMS as well as NoSQL databases.\
8.It is asynchronous and single-threaded.\
9.Its robust API makes routing easy.\
\
__Q10.How an HTTP Communication works.__.\
Ans.The HTTP Communication
When a client wants to communicate with a server, the first thing that happens, after the user types the URL in the browser address bar or goes to another page, is opening a TCP/IP connection, and the HTTP request is sent to the server. In that request, there is a message with a series of data describing what the customer has requested. The server then sends the response to the client, which also contains data that can be read. Finally, the request-response process is finalized. Keep in mind that everything here usually takes microseconds to happen.
\
__Q11.What is Middleware in ExpressJS__\
Ans.Middleware functions are the functions that access to the request and response object (req, res) in request-response cycle.\ 
A middleware function can perform the following tasks: It can execute any code. \ It can make changes to the request and the response objects. \ 
It can end the request-response cycle.

\
## Program 
-Create a Rest API using ExpressJS and Typescript, which has five endpoints of type:\
-POST–Create a user and save it into a JSON file.-PUT –Update a user on the basis of its email.\
-GET–Get a specific user detail on the basis of email from JSON File.\
-DELETE –Delete a specific user on the basis of email.\
-Get –A Get request for getting all the available user in JSON file.Note:\
-If there is already an email exist in JSON file, User can not add the user with duplicate email.\
-The JSON File will contain anarray of Users.\
-User Type Example: \
```javascript
{name: “Jhon Doe”,
age: 34,
email: jhon@gmail.com,
Gender: “Male”}
```
-Here Gender Will be an `enum`.\
TIP:-Use The `fs` Module to Read and Write Data into JSON.\
Please try to maintain the Folder Structure.\
