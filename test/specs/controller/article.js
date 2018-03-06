import { describe } from 'pm2';

const { assert } = require('chai');
const request = require('supertest');
const app = require('../../../app');
const jsonMock = require('../../jsonMock');

describe('article controller', function () {
  describe('POST /create/article', function () {
    it('response with json', function (done) {
      request(app)
        .post('/api/v1/create/article')
        .set('Accept', 'application/json')
        .send({})
        .expect(200)

    })
  })
})