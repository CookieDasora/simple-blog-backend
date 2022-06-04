const express = require('express');

const Router = express.Router();

const CreateArticleController = require('./Controllers/CreateArticle.controller');
const DeleteArticle = require('./Controllers/DeleteArticle.controller');
const GetArticle = require('./Controllers/GetArticle.controller');
const GetArticles = require('./Controllers/GetArticles.controller');

Router.post('/article/create', new CreateArticleController().handle);
Router.get('/', new GetArticles().handle);
Router.get('/article/:id', new GetArticle().handle);
Router.get('/article/delete/:id', new DeleteArticle().handle);

module.exports = Router;
