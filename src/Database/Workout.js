const DB = require('../models/Series');
const { saveToDatabase } = require('./utils');

const getAllWorkouts = () => {
    return DB.workouts;
};

const getOneWorkout = (workoutId) => {
    const workout = DB.workout.find ((workout) => workout.id === workoutId);
    if(!workout){
        return;
    }
    return workoutId;
}

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


module.exports = { getAllWorkouts, getOneWorkout, createdWorkout};