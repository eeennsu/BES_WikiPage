import { Schema, model, models } from 'mongoose';

const ContentSchema = new Schema({
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

    teacher: {
        type: String,
        required: true
    }
});

ContentSchema.set('timestamps', true);

const ContentModel = models.Content || model('Content', ContentSchema);

export default ContentModel;