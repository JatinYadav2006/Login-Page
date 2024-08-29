document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === " " || username === "" || password === " " || password === "") {
        document.getElementById('message').textContent = "Please fill in all fields.";
        document.getElementById('message').style.color = "red";
        return;
    }

    document.getElementById('message').textContent = "Login successful!";
    document.getElementById('message').style.color = "green";

    document.getElementById('loginForm').reset();
});

document.querySelectorAll('.sso-btn').forEach(button => {
    button.addEventListener('click', function () {
        const provider = this.textContent.split(' ')[2];
        alert(`SSO with ${provider} clicked!`);
    });
});
