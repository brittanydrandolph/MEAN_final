const mongoose = require("mongoose")
const Pets = mongoose.model("Pets")

module.exports = {
    index: function(req,res){
        Pets.find()
            .then(data => res.json({info: data, message: "Success at the index page in controller"}))
            .catch(err => res.json({info: err, message: "Error at the index page in controller"}))
    },
    delete: function(req,res){
        let id = req.params.id;
        Pets.remove({_id:id})
            .then(deleted => res.json({info: deleted, message: "Success at the delete in controller"}))
            .catch(err => res.json({info: err, message: "Error at the delete page in controller"}))
    },
    details: function(req,res){
        let id = req.params.id;
        Pets.findById(req.params.id)
            .then(data => res.json({info: data, message: "Success at the details page in controller"}))
            .catch(err => res.json({info: err, message: "Error at the details page in controller"}))
    },
    edit: function(req, res){
        let id = req.params.id;
        console.log("found a pet to edit")
        Pets.findById(id, function(err, Editpet){
            if(err){
                res.json({message: "errors in controller edit function", info: err})
            }
            else{
                Editpet.name = req.body.name;
                Editpet.type = req.body.type;
                Editpet.description = req.body.description;
                Editpet.skillOne = req.body.skillOne;
                Editpet.skillTwo = req.body.skillTwo;
                Editpet.skillThree = req.body.skillThree;
                Editpet.save({ runValidators: true }, function(err){
                    if(err){
                        res.json({message: "errors in saving", info: err});
                    }
                    else{
                        res.json({message: "success in saving", info: Editpet});
                    }
                })
            }
        })
    },

    add: function(req,res){
        Pets.create({name: req.body.name, type: req.body.type, description: req.body.description, skillOne: req.body.skillOne, skillTwo: req.body.skillTwo, skillThree: req.body.skillThree})
            .then(created => res.json({info: created, message: "successfully created"}))
            .catch(err =>res.json ({info: err, message: "failure to make create"}))
    }
}