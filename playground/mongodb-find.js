// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

 MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MangoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('58a62d56e5400060aea828ca')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined,2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().toArray().then((count) => {
  //   console.log(`Todos count: ${count}`);
  //   console.log(JSON.stringify(docs, undefined,2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({
    name: 'Diego De Granda'
  }).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined,2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  // db.close();
});
