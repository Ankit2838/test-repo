const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.send('❌ Username and password are required.');
  }
  return res.send(`✅ Welcome, ${username}!`);
});

app.listen(5000, () => {
  console.log("LF Edge App is running on port 5000");
});
