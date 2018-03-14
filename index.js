var app = require('./config/custom-express')();

app.listen(8080, function() {
  console.log('Server running at 8080.');
});

module.exports = app;
