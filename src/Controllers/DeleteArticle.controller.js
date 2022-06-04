/* eslint-disable class-methods-use-this */
const Article = require('../Models/Article');

class DeleteArticle {
  async handle(req, res) {
    const { id } = req.params;
    try {
      await Article.remove({ _id: id });
      return res.status(200).json({ message: 'Deleted' });
    } catch (e) {
      return res.status(500).json(e);
    }
  }
}

module.exports = DeleteArticle;
