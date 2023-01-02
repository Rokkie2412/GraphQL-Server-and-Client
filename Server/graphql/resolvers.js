const Contact = require('../models/Contact')

module.exports = {
    Query: {
        async contact(_, {ID}){
            return await Contact.findById(ID)
        },
        async getContact(_, {amount}) {
            return await Contact.find().limit(amount)
        },
        //belum work!
        async getByName(_,{name}) {
            return await Contact.findOne().sort({name:name})
        },
    },
    Mutation:{
        async createContact(_,{contactInput: {name, email, phoneNumber}}){
            const createdContact = new Contact({
                name:name,
                email: email,
                phoneNumber: phoneNumber
            })
            const res = await createdContact.save()
            console.log(res.doc);
            return{
                id: res.id,
                ...res._doc
            }
        },
        async deleteContact(_, {ID}){
            const wasDeleted = await Contact.deleteOne({_id:ID}).deletedCount
            return wasDeleted
        },
        async editContact(_,{ID, contactInput: {name, email, phoneNumber}}){
            const wasEdited = (await Contact.updateOne({_id:ID}, {name: name, email:email, phoneNumber:phoneNumber})).modifiedCount
            return wasEdited
        }
    }
}