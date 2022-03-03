var express = require('express');
var app = express();
var PORT = 3000;
var path = require('path');

 const static_path = path.join(__dirname,"public/html");
 app.use(express.static(static_path));
// ------------------------------------------------index.html------------------------------------------/-

app.get('', (req, res) => {
res.send("<a href='/about'> about </a>")
})

//-------------------------------------------------about.html-------------------------------------------/-
app.get('/about', (req, res) => {
  res.send("<a href='/'> home </a>")
  })

  app.get('*', (req, res) => {
    res.send("404 error page")
    })

app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});
