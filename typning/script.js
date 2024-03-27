//Låser sig till sin typ
var myName = "Love";
var myNumber = 8;
var myBool = false;
//Funkar inte i TS eftersom de är låsta till sin typ
//myName = 9;
//myNumber "hej";
//myBool = 5
//Det går att byta värde då värdet inte är låst
myName = "Kalle";
myNumber = 4;
myBool = true;
//Låst till en array med nummer i
var myArray = [1, 2, 3, 4, 5, 6, 7];
//Går inte då den är låst till att innehålla nummer
//myArray.push("hej");
//Låst till att innehålla strängar &/eller nummber
var mySecondArray = [1, 2, "hej", 4, 5, 6, 7];
mySecondArray.push("tja");
//Går även lägga till t.ex. boolean i arrayen också på samma sätt. Variabeln måste dock fortfarande ha ett array värde.
//Låst till ett projekt som har dessa properties. Varje property är låst till dens typ
var myObject = {
    firstName: "Love",
    lastName: "Karlquist",
    age: "21",
    isAwesome: true
};
//Går inte, låst till att vara sträng
//myObject.firstName = 8;
//Går inte lägga till fler properties. Låst till de ursprungliga propertiesarna
//myObject.newProperty = "hej";
