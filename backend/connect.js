const {MongoClient, ServerApiVersion} = require('mongodb')
require('dotenv').config({path: "./config.env"})

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.ATLAS_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})

let database
let dbCible = "PortfolioEN"

module.exports = {
    connectToServer: () => {
        database = client.db(dbCible)
    },
    getDb: () => {
        return database
    }
}

console.log("the database is connected")