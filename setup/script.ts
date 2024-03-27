const firstName = "Love";

const myFunction = () => {
    console.log(firstName);   
}

console.log("Watcher");

//Viktiga kommandon att komma ihåg: "tsc script" för att manuellt kompilera
//"tsc script --w" för att watcha, och automatiskt kompilera
//"tsc --init" för att skapa tsconfig.json fil. Bör alltid göras