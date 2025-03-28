const express = require("express")
const database = require("./connect")

let specialtiesRoutes = express.Router()

// 1 - Retrieve All
// http://localhost:3000/specialties
specialtiesRoutes.route("/specialties").get(async(request, response) => {
    let db = database.getDb()
    let data = await db.collection("Specialties_Card").find({}).toArray()
    if (data.length > 0) {
        response.json(data) // return equivalent
    }else {
        throw new Error("Data was not found")
    }
})

// 2 - Retrieve One
// http://localhost:3000/specialties/28374
specialtiesRoutes.route("/specialties/:id").get(async(request, response) => {
    let db = database.getDb()
    let data = await db.collection("Specialties_Card").findOne({_id: request.params.id})
    if (Object.keys(data).length > 0) {
        response.json(data) // return equivalent
    }else {
        throw new Error("Data was not found")
    }
})

module.exports = specialtiesRoutes