let myName: any = "Love";

//let myNameWithCorrectType = <string>myName; //sätter typen till string från any
let myNameWithCorrectType = myName as string; //fungerar lika dant



//const a = document.querySelector("a")//! //! talar man om att a garanterat 100% kommer finnas. SKa användas i stor försiktighet, dvs om a tas bort blir det inte bra

//console.log(a?.href); //?, om a finns går man vidare, i detta fallet till href

const a = document.querySelector("#myFirstAnchor") as HTMLAnchorElement //Hämtar via ID. TS vet inte vilken type det är, om man inte lägger till "as ..."

console.log(a);
