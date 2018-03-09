const { assert } = require('chai');
const request = require('supertest');
const app = require('../../../app');
const { Article } = require('../../../models');
const jsonMock = require('../../json-mock');
const prefix = '/api/v1'
describe('article controller', function () {
  describe('POST /create/article', function () {
    it('response with json', function (done) {
      request(app)
        .post(`${prefix}/create/article`)
        .set('Accept', 'application/json')
        .send(jsonMock.article)
        .expect(200)
        .end((err, res) => {
          assert.notExists(err)
          done();
        })
    })
  });
  describe('GET /articles', function () {
    it('should repsonse a array data', function (done) {
      request(app)
        .get(`${prefix}/articles`)
        .set('Accept', 'application/json')
        .expect(200)
        .end((err, res) => {
          assert.isArray(res.body.data.list);
          done();
        });
    });
  });
  describe('get /article/:id', function () {
    it('should response a object data', function (done) {
      Article.findOne().then(article => {
        request(app)
          .get(`${prefix}/article/${article.id}`)
          .set('Accept', 'application/json')
          .expect(200)
          .end((err, res) => {
            let article = res.body.data;
            assert.notExists(err);
            assert.isObject(article);
            assert.isString(article.content);
            done();
          });
      });
    });
  });
  describe('post /update/article/:id', function () {
    it('should repsonse success', function (done) {
      Article.findOne().then(article => {
        request(app)
          .post(`${prefix}/update/article/${article.id}`)
          .send({ content: 'zsedcxxxy' })
          .set('Accept', 'application/json')
          .expect(200)
          .end((err, { body }) => {
            assert.notExists(err);
            assert.equal(0, body.code);
            done();
          });
      })
    });
  });
  describe('post /delete/article/:id', function () {
    it('should repsonse success', function (done) {
      request(app)
        .post(`${prefix}/delete/article/5a9fcb3008589536b2e0efc6`)
        .expect(200)
        .end((err, { body }) => {
          assert.notExists(err);
          assert.isObject(body);
          done();
        });
    });
  });
});