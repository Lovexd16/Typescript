let firstName: string | number; //Tillåter string & / eller number
let age: number;
let isAwesome: boolean;

firstName = "Love";

//Arrays
//Man kan ändra string till t.ex. number om man vill ha en array med nummer
let myArray: string[] = []; //Skapa som en tom array med = [] för att tala om att det är en array så man kan använda array metoder

myArray.push("Karlquist");

//Union types
//Detta är hur man tillåter flera olika typer
let myUnionArray: (string | number) [] = [];

myUnionArray.push("Love");
myUnionArray.push(1);
//myUnionArray.push(true); Fungerar inte då vi bara tillåtit string och number, inte boolean

//Objekt
let myObject: {
    firstName: string,
    age: number
}

myObject = { firstName: "Love", age: 21} //Måste förhålla oss till typerna vi satt. Går inte lägga till fler här

//Tillåter alla typer. Undviks helst då det tar bort vitsen med typescript
let user: any

user = "Love";
user = 21;
user = true;