interface User {
    readonly firstName: string,
    lastName: string,
    age: number,
    isAdmin: boolean
    //email?: string //? = optional
}

interface UserWithEmail extends User { //Går att extenda User och lägga till på detta sätter
    email: string
}

const user1: User = { //Sätter att user1 ska hålla strukturen User
    firstName: "Love",
    lastName: "Karlquist",
    age: 21,
    isAdmin: true
}

const user2: UserWithEmail = { 
    firstName: "Anna",
    lastName: "Annasson",
    age: 29,
    isAdmin: true,
    email: ""
}

function helloUser(user: User) {
    //user.firstName = "Anna"; Funkar inte att ändra då vi satt firstName till "readonly"
    console.log("Hello " + user.firstName);
    
}

helloUser(user1);