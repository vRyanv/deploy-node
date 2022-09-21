const mongoose = require('mongoose')

async function connect()
{
    try{
        await mongoose.connect('mongodb+srv://khangMogonDB:21082002@learn-mongodb.txma9sp.mongodb.net/learn-mongoDB')
        console.log('Connect successfully!')
    }catch(error){
        console.log('Connect failure!')
    }
}

module.exports = {connect}