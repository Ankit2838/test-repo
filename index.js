document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (username === '' || password === '') {
        document.getElementById('message').textContent = 'Please enter both username and password.';
        document.getElementById('message').style.color = 'red';
    } else {
        // In a real-world application, you'd send the data to a server here.
        document.getElementById('message').textContent = `Welcome, ${username}!`;
        document.getElementById('message').style.color = 'green';
    }
});
