// connect mongoose to DB

const mongoose = require('mongoose');

let connectionString = `mongodb+srv://God:${process.env.MONGO_PASS}@cluster0.exyeecp.mongodb.net/MOD3?retryWrites=true&w=majority`

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


// log when connected

mongoose.connection.once('open', ()=> {
    console.log('connected to DATABASE');
});