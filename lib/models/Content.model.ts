import { Schema, model, models } from 'mongoose';

const contentSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },

    title: {
        type: String,
        required: true,
    },

    text: {
        type: String,
        required: true,
    },
    
    subject: {
        type: String,
        required: true,
    },
});

const ContentModel = models.Content || model('Content', contentSchema);

export default ContentModel;