module.exports = {
    multipleDataMongoToObject: function(mongoose) {
        return mongoose.map(mongoose => mongoose.toObject())
    },
    DataMongoToObject: function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose
    }
}