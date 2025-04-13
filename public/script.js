document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username === '' || password === '') {
      document.getElementById('message').textContent = '❌ Both fields are required.';
      document.getElementById('message').style.color = 'red';
    } else {
      fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
      })
      .then(res => res.text())
      .then(msg => {
        document.getElementById('message').textContent = msg;
        document.getElementById('message').style.color = msg.includes('Welcome') ? 'green' : 'red';
      });
    }
  });
  