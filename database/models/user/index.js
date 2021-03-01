import mongoose from '../../connnect.js'
import encrypt from "mongoose-encryption"

let Schema = mongoose.Schema


const Users = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    contact: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        default: "Male",
        enum: ["Male", "Female", "Other"]
    },
},{
    timestamps: true
})

var encKey = process.env.SOME_32BYTE_BASE64_STRING;  // command ===> openssl rand -base64 32
var sigKey = process.env.SOME_64BYTE_BASE64_STRING;  // command ===> openssl rand -base64 64

// encryption middleware
Users.plugin(encrypt, { 
    encryptionKey: encKey, 
    signingKey: sigKey, 
    encryptedFields: ['contact', 'address']     // fields that needs to be encrypted
});

export default mongoose.model('Users', Users)