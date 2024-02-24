import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
    email: String,
    password: String,
    contents: [{
        type: Schema.Types.ObjectId,
        ref: 'Content'
    }]
});

const UserSchema = models.User || model('User', userSchema);

export default UserSchema;