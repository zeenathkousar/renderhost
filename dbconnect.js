const mongoose = require('mongoose')

const dbConn = async () => {
    try {
        await mongoose.connect(process.env.URL, { dbName: "Brands" })
        console.log('mongodb conected')
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = dbConn