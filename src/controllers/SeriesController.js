const workoutService = require("../services/SeriesService");
const Workout = require('../models/Series');
const SeriesSchema = require("../models/Series");

const getAllWorkouts = (req, res) => {
    Workout.find((err, result) => {
        if (err) throw new Error(err);
        res.json(result);
        console.log(result);
    })
};

const getOneWorkout = (req, res) => {
    const { params: { workoutId },
} =req;

if (!workoutId) {
    return;
}

const workout = workoutService.getOneWorkout(workoutId);
res.send({ status: "OK", data: workout });

    //const { SeriesId } = req.params
    //if (!SeriesId) {
    //    return;
    //}
    //Workout.findById(SeriesId, (err, result) => {
    //    if (err) throw new Error(err);
    //    res.json(result);
    //})
};

const createNewWorkout = (req, res) => {
    const { body } = req;

    if (
        !body.name ||
        !body.chapter ||
        !body.chapter_time ||
        !body.release_date
    ) {
        return;
    }

    const newWorkout = {
        name: body.name,
        chapter: body.chapter,
        chapter_time: body.chapter_time,
        release_date: body.release_date
    };

    console.log("newWorkout", newWorkout);

const createdWorkout = workoutService.createNewWorkout(newWorkout);
    res.staus(201).send({ status: "OK", data: createdArtist });
};

const updateOneWorkout = (req, res) => {
    const updatedWorkout = workoutService.updateOneWorkout(req.params.workoutId);
    res.send('Update workout ' + req.params.workoutId);
};

const deleteOneWorkout = (req, res) => {
    workoutService.deleteOneWorkout(req.params.workoutId);
    res.send('Delete workout ' + req.params.workoutId);
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
};