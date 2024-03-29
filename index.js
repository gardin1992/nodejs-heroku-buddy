var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/teste', function (req, res) {
  res.json({ success: true, deploy: 'completi'});
});
app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/cool', function (req, res) {
	res.send(cool());
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

