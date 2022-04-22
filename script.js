let pass1 = document.getElementById("user_password").value;
let pass2 = document.getElementById("password_2").value;


function check() {
    if (document.getElementById("user_password").value === document.getElementById("password_2").value) {
        document.getElementById("message").textContent = "Passwords match!";
        document.getElementById('message').style.color = "rgb(89,109,72)";

    } else {
        document.getElementById("message").textContent = "Passwords don't match yet";
        document.getElementById('message').style.color = 'red';

    }
}
