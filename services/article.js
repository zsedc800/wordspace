const { Article } = require('../models');

exports.create = function (articleData) {
  let article = new Article(articleData);
  return article.save();
};

exports.update = function (articleData) {
  let _id = articleData._id;
  delete articleData._id;
  return Article.update({ _id }, articleData);
};

exports.delete = function (articleId) {
  return Article.remove({ _id: articleId });
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
    article.pv++;
    return Article.update({ _id }, { pv: article.pv }).then(result => {
      return article;
    });
  });
};
