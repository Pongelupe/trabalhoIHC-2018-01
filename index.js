var app = require('./config/custom-express')();

app.listen(3000, function() {
  console.log('Server running at 3000.');
});

module.exports = app;
