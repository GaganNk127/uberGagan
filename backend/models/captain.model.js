const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 characters long']
        },
        lastname: {
            type: String,
            minlength: [3, 'Last name must be at least 3 characters long']
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, 'Email must be at least 5 characters long'],
        match: [/\S+@\S+\.\S+/, 'Invalid email format']
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    socketId: {
        type: String,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    vehicle: {
        color: {
            type: String,
            required: true
        },
        plate: {
            type: String,
            required: true,
            unique: true,
            minlength: [6, 'Plate must be at least 6 characters long']
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, 'Capacity must be at least 1'],
        },
        vehicleType: {
            type: String,
            enum: ['car', 'auto', 'motorcycle'],
            required: true
        },
        location: {
            lat: {
                type: Number,
            },
            lng: {
                type: Number,
            }
        }
    }
});

// ✅ Generate JWT token
captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign(
        { _id: this._id, email: this.email }, // safer
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
    );
    return token;
}

// ✅ Compare entered password with hashed password
captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

// ✅ Hash a new password
captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const Captain = mongoose.model('Captain', captainSchema);

module.exports = Captain;
