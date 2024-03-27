var myName = "Love";
//let myNameWithCorrectType = <string>myName; //sätter typen till string från any
var myNameWithCorrectType = myName; //fungerar lika dant
//const a = document.querySelector("a")//! //! talar man om att a garanterat 100% kommer finnas. SKa användas i stor försiktighet, dvs om a tas bort blir det inte bra
//console.log(a?.href); //?, om a finns går man vidare, i detta fallet till href
var a = document.querySelector("#myFirstAnchor"); //Hämtar via ID. TS vet inte vilken type det är, om man inte lägger till "as ..."
console.log(a);
