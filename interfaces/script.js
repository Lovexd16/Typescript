var user1 = {
    firstName: "Love",
    lastName: "Karlquist",
    age: 21,
    isAdmin: true
};
var user2 = {
    firstName: "Anna",
    lastName: "Annasson",
    age: 29,
    isAdmin: true,
    email: ""
};
function helloUser(user) {
    //user.firstName = "Anna"; Funkar inte att ändra då vi satt firstName till "readonly"
    console.log("Hello " + user.firstName);
}
helloUser(user1);
