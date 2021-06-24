const express = require('express'); //express we need it to The primary use of Express is to provide server-side logic for web and mobile applications
const connectDB = require('./config/db');
const path = require('path');
const app = express(); //intialize express into a var called app

// Connect Database
connectDB();

//init Middelware
app.use(express.json({extended: false })); 

app.get('/', (req, res) => 
  res.json({msg:'Welcome to EVAL....'})//add a route with using app.whenever the request we want to make
); 

// Define routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/inscription', require('./routes/inscription'))
app.use('/api/gestion-des-formations', require('./routes/gestion-des-formations'))
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}
const PORT =5000;//look for an envirement var first or any port we want process.env.PORT ||

app.listen(PORT, () => console.log(`Server staarted on port ${PORT}`)); //listen method and we need a port to listen on
