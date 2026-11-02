script>

function signupUser(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword =
        document.getElementById("confirmPassword").value;

    let message = document.getElementById("message");

    if (password !== confirmPassword) {
        message.innerText = "Passwords do not match!";
        message.style.color = "red";
        return;
    }

    let user = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem("quizUser", JSON.stringify(user));

    message.style.color = "green";
    message.innerText =
        "Account Created Successfully! Now Login.";

}
