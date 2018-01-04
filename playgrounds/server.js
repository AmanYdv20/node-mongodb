var { MongoClient, ObjectID } = require('mongodb'); //ES6 Destructuring
var url = 'mongodb://127.0.0.1:27017';

MongoClient.connect(url, function (err, client) {
  if (err) throw err;
  var db = client.db('mytestingdb');

  db.collection('customers').find({
    _id: new ObjectID('5a4cc6fe3b21550ea6414b9b'),
  }).toArray().then((docs)=> {
    console.log('customers');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch', err);
  });
});
