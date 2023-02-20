const workoutService = require ("../services/SeriesService");
const Workout = require('../models/Series')
const SeriesSchema = require ("../models/Series")

const getAllWorkouts = (req, res) => {
    Workout.find((err, result) => {
        if(err) throw new Error(err);
        res.json(result);
    })
};

const getOneWorkout = (req, res) => {
    const {SeriesId} = req.params
    if(!SeriesId) {
        return;
    }
    Workout.findById(SeriesId, (err, result) => {
        if(err) throw new Error(err);
        res.json(result);
    })
};

const createNewWorkout = (req, res) => {
    const createdWorkout = workoutService.createNewWorkout(req.params.workoutId);
    res.send('Create workout ' +req.params.workoutId);
};

const updateOneWorkout = (req, res) => {
    const updatedWorkout = workoutService.updateOneWorkout(req.params.workoutId);
    res.send('Update workout ' +req.params.workoutId);
};

const deleteOneWorkout = (req, res) => {
    workoutService.deleteOneWorkout(req.params.workoutId);
    res.send('Delete workout ' +req.params.workoutId);
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
};