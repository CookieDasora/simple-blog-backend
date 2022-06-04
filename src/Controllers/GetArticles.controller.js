/* eslint-disable class-methods-use-this */
const Article = require('../Models/Article');

class GetArticle {
  async handle(req, res) {
    const articles = await Article.find();
    return res.status(200).json(articles);
  }
}

module.exports = GetArticle;
