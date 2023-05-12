const mongoose = require('mongoose');


//connect to DB
mongoose.connect('mongodb+srv://manishjangir05012001:12345@cluster0.r5nvte5.mongodb.net/', { useNewUrlParser: true ,useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to db"));

db.once('open', function () {
    console.log("Successfully connected to db");
});
