function logSecurityWarning() {
  console.log("⚠️ Potential login attempt without credentials");
}
function logSecurutyvulnereability() {
  console.log(" Potential login attempt without credentials");
}
const express = require('express');
const path = require('path');
const app = express(); // ✅ DEFINE app BEFORE using it

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
  let { username, password } = req.body;

  // Normalize inputs
  username = username?.trim();
  password = password?.trim();

  if (!username || !password) {
    return res.send('❌ Username and password are required.');
  }

  return res.send(`✅ Welcome, ${username}!`);
});

if (require.main === module) {
  app.listen(5000, () => {
    console.log("LF Edge App is running on port 5000");
  });
}

// ✅ Export app for testing
module.exports = app;
