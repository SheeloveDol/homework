const express = require('express');
const app = express();

// tester route
app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});


const ADDRESS = 'localhost';
const PORT = 3000;
app.listen(PORT, ADDRESS, () => {
  console.log(`Server is listening at ${ADDRESS}: ${PORT}`);
})