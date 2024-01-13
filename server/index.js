const express = require('express')
const cors = require("cors")
const {connect} = require("mongoose")
require('dotenv').config()

const app = express()

connect(process.env.MONGO_URI).then(app.listen(5000, () => console.log(`Server started on port ${process.env.PORT}`))).catch(error => {console.log(error)})



//Database password 3DHBdLljLJVsLmlN --- SDmfdMp23IAnjuP2
// Connection string mongodb+srv://sebogodio:SDmfdMp23IAnjuP2@cluster0.3nawanm.mongodb.net/