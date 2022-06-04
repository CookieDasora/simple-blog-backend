/* eslint-disable func-names */
const { Schema } = require('mongoose');
const mongoose = require('mongoose');
const { marked } = require('marked');
const slugify = require('slugify');
const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');

const DOMPurify = createDOMPurify(new JSDOM('').window);

const ArticleSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  markdown: { type: String },
  createdAt: { type: Date, default: Date.now() },
  slug: { type: String, required: true, unique: true },
  html: { type: String, required: true },
});

ArticleSchema.pre('validate', function (next) {
  if (this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }

  if (this.markdown) {
    this.html = DOMPurify.sanitize(marked.parse(this.markdown));
  }

  if (!this.description) {
    this.description = 'No description';
  }

  next();
});

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;
