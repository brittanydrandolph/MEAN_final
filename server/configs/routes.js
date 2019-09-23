const pets = require("../controllers/controller");
const path = require("path")

module.exports = function(app){
    app.get("/api/petsAll", pets.index)
    app.delete("/api/delete/:id", pets.delete)
    app.get("/api/pets/:id", pets.details)
    app.put("/api/pets/:id/edit", pets.edit)
    app.post("/api/addPet", pets.add)
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
        });
}