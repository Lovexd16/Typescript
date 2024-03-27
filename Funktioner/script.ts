//Optional parameters

const calc = (num1: number, num2: number, operator?: string) => { //Frågetecknet gör att operator blir frivillig. Dessa ska ligga sist bland parametrarna
    
    console.log(operator);
}

calc(3, 4);

//Function signatures

let greet: (a: string, b: string) => string;

greet = (firstName: string, lastName: string): string => {
    return firstName + " " + lastName;
    
}

let greeting = greet("Love", "Karlquist")