const express = require('express');
const app = express();
app.use(express.json());
const fs = require('fs');

app.use('/js', express.static('./public/js'));
app.use('/css', express.static('./public/css'));
app.use('/img', express.static('./public/img'));

app.get('/', function (req, res) {
  let doc = fs.readFileSync('./app/html/index.html', 'utf-8');
  res.send(doc);
});

app.get('/work', function (req, res) {
  let doc = fs.readFileSync('./app/html/work.html', 'utf-8');
  res.send(doc);
});

let port = 8000;
app.listen(port, function () {
  console.log('Site ready on port: ' + port);
});
