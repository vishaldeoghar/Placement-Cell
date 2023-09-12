const mongoose = require('mongoose');
const DB = 'mongodb+srv://vishal9801:kQHQHn3tqV5@cluster0.9rkrgpn.mongodb.net/';

mongoose.connect(DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', function () {
	console.log('Connected to Database :: Mongodb');
});

module.exports = mongoose;
