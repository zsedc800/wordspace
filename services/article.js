const { Article } = require('../models');

exports.create = function (articleData) {
  let article = new Article(articleData);
  return article.save();
};

exports.update = function (id, articleData) {
  return Article.findByIdAndUpdate(id, articleData);
};

exports.delete = function (articleId) {
  return Article.findByIdAndRemove(articleId);
}

exports.getAll = function ({ skip, limit, condition }) {
  return Article.count(condition).then(count => {
      return Article.find(condition, '_id title isPublish author pv date commentCount coverImg', {
        skip,
        limit
      }).then(docs => {
        return {
          list: docs,
          total: count
        };
      });
    });
};

exports.getDetail = function (_id) {
  return Article.findOne({ _id }).then(article => {
    if (!article) {
      throw new Error('article not found');
    }
    article.pv++;
    return Article.update({ _id }, { pv: article.pv }).then(result => {
      return article;
    });
  });
};
