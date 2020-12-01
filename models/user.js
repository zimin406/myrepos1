const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number
    },
    image: String,
    token: {
        type: String,
    },
    tokenExp: {
        type: Number
    }
})

const user = mongoose.model('user' , userSchema)