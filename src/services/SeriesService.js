const { request } = require("express");
const {v4: uuid} = require("uuid");
const { create } = require("../models/Series");
const Workout = require("../models/Series");

const getAllWorkouts = () => { 
    const allWorkouts = Workout.getAllWorkouts();
    return allWorkouts; 
};

const getOneWorkout = (workoutId) => { 
    const workout = workout.getOneWorkout(workoutId);
    return workout;
};

const createNewWorkout = (newWorkout) => { 
    const workoutToinsert ={
        ...newWorkout,
        id: uuid(),
        createdAT: new Date().toLocaleString("en-US", { timezone: "UTC"} ),
        updateAt: new Date().toLocaleString("en-US", { timezone: "UTC"} ),
    } 

    const  createdWorkout = Workout.createNewWorkout(workoutToinsert);
    return createNewWorkout;
};

const updateOneWorkout = () => { 
    return; 
};

const deleteOneWorkout = () => { 
    return; 
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}