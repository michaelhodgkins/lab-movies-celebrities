const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const movieSchema = new Schema(
        {
            name: String,
            genre: String,
            plot: String,
            cast: Schema.Types.ObjectId, ref: "Celeb"


        }
);

module.exports = model('Movie', movieSchema);