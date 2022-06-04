/* eslint-disable class-methods-use-this */
const Article = require('../Models/Article');

class GetArticle {
  async handle(req, res) {
    const { id } = req.params;
    const article = await Article.findOne({ _id: id });
    if (article === null) {
      return res.status(400).json({ error: 'Article not found' });
    }
    return res.status(200).json(article);
  }
}

module.exports = GetArticle;
