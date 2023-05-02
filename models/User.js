import mongoose, {Schema, model} from "mongoose";

const userSchema = new Schema({

    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    image_profile: {type: String, required: false},
    bio: {type: String, required: false},
})

const User = mongoose.models.User || model('User', userSchema)

export default User
