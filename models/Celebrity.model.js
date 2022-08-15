//  Add your code here
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const celebSchema = new Schema(
        {
            name: String,
            occupation: String,
            catchPhrase: String


        }
);

module.exports = model('Celeb', celebSchema);