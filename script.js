const form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const message = document.getElementById("message");

    message.textContent = "Hello " + name + "! Your email is " + email;

});