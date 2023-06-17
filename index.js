require("dotenv").config();
const connectToMongo = require("./db");
const express = require("express");
const app = express();
const path = require('path')
const PORT = process.env.PORT || 4000;
var cors = require("cors");

console.log(process.env.NODE_ENV);
connectToMongo();


app.use(cors());

app.use(express.json());

// Available Routes
app.use('/', express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes/root'))
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.all('*', (req, res) => {
  res.status(404)
  if (req.accepts('html')) {
      res.sendFile(path.join(__dirname, 'views', '404.html'))
  } else if (req.accepts('json')) {
      res.json({ message: '404 Not Found' })
  } else {
      res.type('txt').send('404 Not Found')
  }
})

app.listen(PORT, () => {
  console.log(`iNotebook backend listening on port ${PORT}`);
});