const DB = require("../Database/Model");

const getAllWorkouts = () => {
    return DB.workouts;
};

module.exports = {getAllWorkouts};