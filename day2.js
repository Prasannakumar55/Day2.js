/*1 .What are closures? Give an example of closure ?

    A closure is a function that has access to the variable from another function’s scope 
    which is accomplished by creating a function inside a function. 
    The function defined in the closure ‘remembers’ the "Lexical Environment" in which it was created. 

Examples : */
 function name0 (Names) {
    var Names = "prasannakumar";
         function inside () {
            console.log(Names);
        }
        inside();
 }
 name0 ();


/* What is creation phase and execution phase?

   When javascript engine execute the code, it creates the execution constexts.
   Each execution constexts has a two phases : 
   (1) Creation phase
   (2) execution phase

   (1) The Creation phase :
       When the javascript engine executes a code first time, 
       it creates the global execution constext.
       during this phase,  

       the stored variables are in the global execution constext. 
       the values are 
       x = 10; 
       Result : undefined.

   (2) execution phase
       variables are in the global execution constext is Executed then 
       the values are 
       x = 10; 
       Result : 10. */


/*    What are objects in javascript?

   The objects are the functions which collects the elements
   in the form of properties and methods.
   In the objects the properties are the key-values. 
   
   Examples : */
    let object = {
      Name : "Prasanna kumar",
      City : "Khammam",
   }
   console.log(object); 

/* What are function constructors ?

   function constructor creates a new object with the function.
   it does not have its own values, it take from the new object.
   it  can add the values of the function and create a new function. 
   
   Examples : */ 
      function jaiHo(song){
	      this.song = song
  	      console.log(this)
   }
         const india = new jaiHo('a')   
      
/* Explain prototypes?         

   The prototypes are the always related to the function.
   it created by default in function by the javascript
   it have the same properties which proto having  it can modified by the proto also,
   it allows the access of properties of the prototypes
   
   Example : */
   function Person(name) {
      this.name = name;
    }
    Person.prototype.getName = function() {
      return this.name;
    }
    
    var person = new Person("John Doe");
    person.getName() 

/*   What is prototype chain.
      
    The object has a private properties and the properties linked to the 
    Another object is called as the prototype chain. 

    Example :*/
    function Person() {
      this.name = 'Prasanna'
  }
  
      Person.prototype.name = 'Naveen';
      Person.prototype.Place = "khammam";
  
      const person1 = new Person();
  
      console.log(person1.name); 
      // Prasanna
      console.log(person1.Place); 
      // khammam
 
/*     Give an example of inheritance using function constructor? 

      The objects of the inheritance propertiesand methods are linke from the prototype.
      prototype is used to modify the properties and the methods of the function.
   
      Example : */

      function Person(first, last, age, gender, interests) {
         this.name = {
           first,
           last
         };
         this.age = age;
         this.gender = gender;
         this.interests = interests;
       };
       
       function Teacher(first, last, age, gender, interests, subject) {
         Person.call(this, first, last, age, gender, interests);
       
         this.subject = subject;
       }
       
/*     What are callbacks?

      The function which is executed after another function has finished execution.

      Examples : */

      function MyName(name) {
         alert('Hello ' + name);
       }
       
       function InsideMyName(callback) {
         var name = promptfjge('Please enter your name.');
         callback(name);
       }
       
       InsideMyName(MyName);

/*     What is the use of setTimeout?
       
       setTimeout() is a function which used to set some particular timer,
       after that time it will be disapear automatically or it arraival some time.
       its depends on the writen function.

      Examples : */

      setTimeout(function(){
         x = 5+1;
         console.log(x);
      }, 2000);
      setTimeout();

 /*    What is an event lsoop and call stack 

      The synchronous  code will run in the call stack and
      asynchronous code runs in the web apis. 
      synchronous code will complete execution then it goes into call queue,
      now the event loops  comes in process.
      when the call sack is empty then only the event loop waits until it empty,
      then placed the next fuction from callback queue to the call stack.

         Examples : */
     
         const a = () => console.log('a');
         const b = () => setTimeout(() => 
                           console.log('b'), 100);
         const c = () => console.log('c');

         a();
         b();
         c();