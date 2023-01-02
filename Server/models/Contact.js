const {model, Schema} = require('mongoose')

const contactSchema = new Schema({
    name:String,
    email:String,
    phoneNumber:String,
})

module.exports = model('Contacts', contactSchema)
