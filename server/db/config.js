
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fyp', (err) => {
    if (!err) {
        console.log('database connected');
    }
});