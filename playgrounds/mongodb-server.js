var { MongoClient } = require('mongodb'); //ES6 Destructuring
var url = 'mongodb://127.0.0.1:27017';

MongoClient.connect(url, function (err, client) {
  if (err) throw err;
  var db = client.db('mytestingdb');
  var myobj = { name: 'Company Inc', address: 'Highway 37' };
  db.collection('customers').insertOne(myobj, (err, res)=> {
    if (err) throw err;
    console.log('1 document inserted');
    client.close();
  });
});
