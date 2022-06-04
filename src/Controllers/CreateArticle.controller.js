/* eslint-disable class-methods-use-this */
const Article = require('../Models/Article');

class CreateArticleController {
  async handle(req, res) {
    const { title, description, markdown } = req.body;

    if (title.length === 0) {
      return res.status(400).json({
        error: 'Missing title',
      });
    }

    const article = new Article({
      title,
      description,
      markdown,
    });

    try {
      const newarticle = await article.save();
      return res.status(200).json({ newarticle });
    } catch (e) {
      return res.status(500).json(e);
    }
  }
}

module.exports = CreateArticleController;
