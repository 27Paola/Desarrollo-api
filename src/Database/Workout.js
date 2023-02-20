const DB = require('../models/Series');
const { saveToDatabase } = require('./utils');

const getAllWorkouts = () => {
    return DB.workouts;
};

const createdWorkout = (newWorkout) => {
    const isAlreadyAdded =
        DBMongo.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;

    if (isAlreadyAdded) {
        return;
    }

    DBMongo.workout.push(newWorkout);
    saveToDatabase(DBMongo);
    return newWorkout;
}


module.exports = { getAllWorkouts, createdWorkout };