type Str0rNbr = string | number //Fungerar även för enskilda properties
type User = {id: Str0rNbr, firstName: string, lastName, password: string, age: number}; //Lägger properties och typer i en variabel User så man lätt kan använda den flera gånger

const regiesterUser = (user: User) => {
    //Register user
}

const loginUser = (user: User) => {
    //Login user
}