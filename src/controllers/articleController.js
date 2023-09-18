import Article from './../models/Article';

export const getAllArticles = async () => {
    const articles = await Article.find()
    return articles
}

export const getArticle = async (id) => {
    const article = await Article.find(id)
    return article
}

export const updateArticle = async ()