const express = require("express")
const database = require("./connect")
const ObjectId = require("mongodb").ObjectId

let languageRoutes = express.Router()

// 1 - Retrieve All
// http://localhost:3000/languages
languageRoutes.route("/languages").get(async(request, response) => {
    let db = database.getDb()
    let data = await db.collection("Language_Card").find({}).toArray()
    if (data.length > 0) {
        response.json(data) // return equivalent
    }else {
        throw new Error("Data was not found")
    }
})

// 2 - Retrieve One
// http://localhost:3000/languages/28374
languageRoutes.route("/languages/:id").get(async(request, response) => {
    let db = database.getDb()
    let data = await db.collection("Language_Card").findOne({_id: request.params.id})
    if (Object.keys(data).length > 0) {
        response.json(data) // return equivalent
    }else {
        throw new Error("Data was not found")
    }
})

module.exports = languageRoutes