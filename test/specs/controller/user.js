const { assert }  = require('chai');
const request = require('supertest');
const mock = require('mock-data');
const app = require('../../../app');
const { User } = require('../../../models');
const prefix = '/api/v1';

const { string: rStr, integer: rInt, date: rDate } = mock;

describe('user controller test ', function () {
  describe('POST /create/user', function () {
    it('test normal action', function (done) {
      request(app)
        .post(`${prefix}/create/user`)
        .send({
          userName: rStr(4, 8, 'aA').generate(),
          type: rInt(1, 3).generate(),
          password: rStr(6, 16, 'aA#').generate(),
          headPic: `http://example.com/pic/${rStr(7, 7, 'aA').generate()}.jpg`
        })
        .expect(200)
        .end((err, { body }) => {
          assert.notExists(err);
          assert.equal(body.code, 0);
          done();
        });
    });
  });
  describe('GET /user/:loginname', function () {
    it('test normal action', function (done) {
      User.findOne().then(user => {
        request(app)
          .get(`${prefix}/user/${user.userName}`)
          .expect(200)
          .end((err, { body }) => {
            assert.notExists(err);
            assert.equal(0, body.code);
            done();
          });
      });
    });
  });
  describe('POST /update/user/:id', function () {
    it('test normal action', function (done) {
      User.findOne().then(user => {
        request(app)
          .post(`${prefix}/update/user/${user.id}`)
          .send({ 
            userName: rStr(4, 8, 'aA').generate(),
            type: rInt(1,2).generate()
          })
          .expect(200)
          .end((err, { body }) => {
            assert.equal(0, body.code);
            done();
          });
      });
    });
  });
  describe('POST /delete/user/:id', function () {
    it('test normal action', function (done) {
      User.findOne().then(user => {
        request(app)
          .post(`${prefix}/update/user/${user.id}`)
          .expect(200)
          .end((err, { body }) => {
            assert.equal(0, body.code);
            done();
          });
      });
    });
  });
})