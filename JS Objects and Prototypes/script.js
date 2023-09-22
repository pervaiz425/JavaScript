//We can't use the function keyword inside object literals to declare the object methods. 
//We can use the function keyword to declare the object methods outside the object literal and 
//assign it to the object property.

const myHonda = {
    color: "red",
    wheels: 4,
    engine: { cylinders: 4, size: 2.2 },
    myName(){
      console.log("My name is Muhammad Umar");
    },
  };
  
  myHonda.myName();


  //But if we declare method as a property of object then we can use function keyword to declare 
  //the object methods inside the object literal.
  

//We can also make objects using constructor functions.
  function Car55(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.method = function(){
        console.log("This is method");
    }
  }

    const car1 = new Car55('Eagle', 'Talon TSi', 1993);
    console.log(car1.make);  // expected output: "Eagle"
    car1.method();


    //Let's see how to delete the property from the Object in case of Object Literals

    const obj = {
        price: 4500000,
        name: "Yaris",
        Type(){
            console.log("Its Yaris by honda");
        }
     }

    delete obj.Type;  
    //while deleting the objects method, we don't need to use the parenthesis.
    //An object is a collection of properties, and a property is an association between 
    //a name (or key) and a value. A property's value can be a function, in which case the 
    //property is known as a method.
    console.log(obj);
    const obj2 = new Object();

    //we can use the const obj2 = Object(obj), it will make the obj2 object as the copy of obj object. Unlike
    //the Object.create() method, it will not make the obj2 object as the prototype object of the obj object.
    obj2.__proto__ = obj;
    console.log(obj2);
    delete obj2.__proto__.price;
    console.log(obj2);
    console.log(obj2.price); 
    console.log(obj2.price);
    console.log(obj2);
    //Now we can see that the price is deleted from obj2 as well.
 

    //Let's see how to delete the property from the Object in case of Constructor Functions
    function Car(wheels, price, name)
    {
        this.wheels = wheels;
        this.price = price;
        this.name = name;
        this.method = function(){
            console.log("This is method");
        }
    }

    const car = new Car(4, 4500000, "Yaris");
    console.log(car);
    delete car.price;
    console.log(car);
    console.log(car.price);  //printing undefined
    //The price is deleted from the car object.
    //We can also delete the method from the object.
    delete car.method;
    console.log(car);

    //When we create the object using the Object.create() method then we can't delete the property from the object.
    //The object created using the Object.create() method is called the prototype object.
    const testObj = Object.create(car);
    console.log(testObj);
    testObj.wheels = 55;
    console.log(testObj.wheels);



    const car2 = new Car(4, 4500000, "Audi GTR");
    console.log(car2);
    
    delete Car.wheels;
    console.log(car2.__proto__);
    console.log(car2.__proto__.__proto__);
    console.log(car2.__proto__.__proto__.__proto__);

    const Objec = new Car(12,34,56);
    let object05 = Objec.__proto__;
    do{
        console.log(object05);
        object05 = object05.__proto__;
    }
    while(object05 != null);  //The Object.getPrototypeOf() method returns the prototype (i.e. the value of the internal [[Prototype]] property)


    
    //Every function has a prototype object built-in into it. and Every Object has a __proto__ property
    //which points to the prototype object of the constructor function which is used to create that object.
    //The __proto__ property is inherited from the Object.prototype object.
    //Object.prototype is the topmost object in the prototype chain. and the lowest object is null.
    //Object is the constructor function of the Object.prototype object.
    //Object.prototype is the prototype object of the Object constructor function.

    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    
    // Adding a new method to the prototype
  
// __proto__ is not a standard property that you should typically use in your code. It is an internal property
//  used for prototype chain lookup.
// Every object in JavaScript has a __proto__ property that points to its prototype object, which is used to 
// look up properties and methods if they are not found on the object itself.
// It's important to note that __proto__ is not a part of the official ECMAScript specification, although it 
// is widely supported in browsers for compatibility reasons. Instead, you should use the Object.getPrototypeOf() 
// method to access an object's prototype.
    Person.prototype.sayHello = function () {
        console.log("Hello, my name is " + this.name);
    };

    console.log(Person.prototype);  //Person.prototype is the prototype object of the Person constructor function.
    console.log(Person.__proto__); 
    
    let john = new Person("John", 30);
    console.log(john.sayHello()); // Outputs: Hello, my name is John
    console.log(john.__proto__); 
    //We can add new properties and methods to the prototype object of the constructor function.
    //We cannot add new properties and methods directly to the constructor function.
    //constructor function has prototype property which points to the prototype object of the constructor function.
    //and every object has __proto__ property which holds the reference to the prototype object of the constructor 
    //function.
    console.log(john);
    delete john.name;
    console.log(john);
    console.log(Person);
    delete Person.name;
    console.log(Person);

    //We cannot delete methods and properties directly from the constructor function. Instead we can delete the
    //properties and methods from the prototype object of the constructor function.
    //and we can also delete the properties and methods from the object created using the constructor function, instances.


    // Define a Person prototype
function Person(name) {
    this.name = name;
  }
  
  // Add a common method to the Person prototype
  Person.prototype.introduce = function () {
    console.log(`Hi, I'm ${this.name}`);
  }
  
  // Create a Professor object inheriting from Person
  function Professor(name, subject) {
    Person.call(this, name); // Call the constructor of the Person prototype
    this.subject = subject;
  }
  
  // Set up the inheritance relationship
  Professor.prototype = Object.create(Person.prototype);
  
  // Add a method specific to Professors
  Professor.prototype.teach = function () {
    console.log(`${this.name} teaches ${this.subject}`);
  }
  
  // Create a Student object inheriting from Person
  function Student(name, grade) {
    Person.call(this, name); // Call the constructor of the Person prototype
    this.grade = grade;
  }
  
  // Set up the inheritance relationship
  Student.prototype = Object.create(Person.prototype);
  
  // Add a method specific to Students
  Student.prototype.study = function () {
    console.log(`${this.name} is studying for the exams`);
  }
  
  // Creating instances of Professor and Student
  const prof = new Professor('Dr. Smith', 'Math');
  const student = new Student('Alice', 'A');
  
  // Using inherited methods
  prof.introduce(); // Output: Hi, I'm Dr. Smith
  prof.teach();    // Output: Dr. Smith teaches Math
  
  student.introduce(); // Output: Hi, I'm Alice
  student.study();    // Output: Alice is studying for the exams
  


//   In JavaScript, prototypes are a powerful and flexible feature that allows you to reuse code and create 
//   relationships between objects, particularly supporting a form of inheritance. Inheritance is a concept in 
//   object-oriented programming (OOP) that allows you to establish a hierarchy where some objects are considered 
//   specialized versions of others.

// Let's use an example to illustrate this:

// Imagine we are building a program to model a school. In this school, we have two types of individuals: 
// professors and students. Both professors and students share some common characteristics, such as having 
// names, but they also have unique attributes. For instance, professors have a subject that they teach, 
// while students may have other characteristics, like their grades or classes they attend.

// In an object-oriented programming system, we can express the relationship between these entities using 
// inheritance. We can say that professors and students both inherit from a common base class or prototype, 
// which we can call "Person." This means that both professors and students will inherit the common properties 
// and methods defined in the "Person" prototype. However, they can also add their own properties and methods 
// or even override existing ones if needed.

// Here's a simplified representation of how this inheritance might look in JavaScript: -> example is explained above