const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    vpn_servers: {
        type: String,
        required: true,
    },
    field2: {
        type: String,
        required: true,
    }, 
    field3: {
        type: String,
        required: true,
    }, 
    field4: {
        type: String,
        required: true,
    }, 
    field5: {
        type: String,
        required: true,
    }, 
    field6: {
        type: String,
        required: true,
    }, 
    field7: {
        type: String,
        required: true,
    }, 
    field8: {
        type: String,
        required: true,
    }, 
    field9: {
        type: String,
        required: true,
    }, 
    field10: {
        type: String,
        required: true,
    }, 
    field11: {
        type: String,
        required: true,
    }, 
    field12: {
        type: String,
        required: true,
    }, 
    field13: {
        type: String,
        required: true,
    }, 
    field14: {
        type: String,
        required: true,
    }, 
    field15: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Posts', PostSchema);