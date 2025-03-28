const express = require("express")
const database = require("./connect")

let mainPageRoutes = express.Router()

// 1 - Retrieve
// http://localhost:3000/mainpage
mainPageRoutes.route("/mainpage").get(async(request, response) => {
    let db = database.getDb()
    let data = await db.collection("Main_Page").findOne({})
    if (Object.keys(data).length > 0) {
        response.json(data) // return equivalent
    }else {
        throw new Error("Data was not found")
    }
})

module.exports = mainPageRoutes