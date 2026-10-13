
const form = document.getElementById("registration-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    message.textContent =
        `Thanks, ${name}! The demo form worked.`;

    form.reset();
});
