var firstName; //Tillåter string & / eller number
var age;
var isAwesome;
firstName = "Love";
//Arrays
//Man kan ändra string till t.ex. number om man vill ha en array med nummer
var myArray = []; //Skapa som en tom array med = [] för att tala om att det är en array så man kan använda array metoder
myArray.push("Karlquist");
//Union types
//Detta är hur man tillåter flera olika typer
var myUnionArray = [];
myUnionArray.push("Love");
myUnionArray.push(1);
//myUnionArray.push(true); Fungerar inte då vi bara tillåtit string och number, inte boolean
//Objekt
var myObject;
myObject = { firstName: "Love", age: 21 }; //Måste förhålla oss till typerna vi satt. Går inte lägga till fler här
//Tillåter alla typer. Undviks helst då det tar bort vitsen med typescript
var user;
user = "Love";
user = 21;
user = true;
