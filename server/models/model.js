const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/Pets", {useNewUrlParser: true});

const PetsSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Pet must have a name"], minlength: 3},
    type: {type: String, required: [true, "Pet must have a type"], minlength: 3},
    description: {type: String, required: [true, "Pet must have a description"], minlength: 3},
    skillOne: {type: String},
    skillTwo: {type: String},
    skillThree: {type:String}},{timestamps: true});

    const Pets = mongoose.model("Pets", PetsSchema);
    module.exports = Pets