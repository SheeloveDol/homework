const express = require('express');
const app = express();
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const path = require('path');
const methodOverride = require('method-override');

app.set('view engine', 'ejs'); 

app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride((req, res) => {
  if (req.body && req.body._method) {
    const method = req.body._method;
    return method;
  }
}))


// tester route
// app.get('/', (req, res) => {
//   res.send('<h1>Hello World</h1>');
// });


// Importer 'cohorts' router
const cohortsRouter = require('./routes/cohorts');
app.use('/cohorts', cohortsRouter);


const ADDRESS = 'localhost';
const PORT = 3000;
app.listen(PORT, ADDRESS, () => {
  console.log(`Server is listening at ${ADDRESS}: ${PORT}`);
})