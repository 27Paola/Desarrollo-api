const mongoose = require('mongoose');

const SeriesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    chapter: {
        type: Number,
        required: true
    },
    chapter_time: {
        type: Number,
        required: true
    },
    launch_date: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('Series', SeriesSchema);