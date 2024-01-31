//DB information
let userDB = "Fernanda";
let passDB = "Test1234";

function login(){
    // 1) get the username and password from the user usering a prompt
    let userName = prompt("Enter your username");
    let userPass = prompt("Enter your password");

    // 2) compare the passDB with the variable
    if(userName === userDB && userPass === passDB){
        // 3) display on the HTML welcome to the system or invalid credentials
        document.getElementById("notifications").innerHTML = "<p>Welcome to the system </p> ";
    }else{
        document.getElementById("notifications").innerHTML = ("<p class='alert-error'>Invalid username or password </p>");
    }
}