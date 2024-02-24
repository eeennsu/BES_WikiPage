import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true
    },

    contents: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Content',
        }
    ]
});

const UserModel = models.User || model('User', UserSchema);

export default UserModel;