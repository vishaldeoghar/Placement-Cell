const mongoose = require('mongoose');
const DB = 'mongodb+srv://vishal123:Password123456@cluster0.lpb5inx.mongodb.net/placement';

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
