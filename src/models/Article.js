import { Schema, model } from 'mongoose';

const articlesSchema = new Schema({
    title: String,
    description: String,
    content: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author'
    },
    categories: [String],
    images: [String],
    datePub: Date,
    keywords: [String]
})

const Article = model('Article', articlesSchema);

export default Article;
