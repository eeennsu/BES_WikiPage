import { Schema, model, models } from 'mongoose';

const contentSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title: String,
    text: String,
    image: String,
    lector: String,
    subject: String,
});

const ContentModel = models.Content || model('Content', contentSchema);

export default ContentModel;