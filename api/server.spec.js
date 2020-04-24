const request = require('supertest');
const server = require('./server');
const db = require('../database/dbConfig');

describe('server', () => {
  describe('GET /', () => {

    it('should run without errors', () => {
      expect(true).toBe(true);
    })

    it('should return 200 OK', () => {
      // make a GET request to / endpoint on the server
      return request(server) // return the async call to let jest know it should wait
        .get('/')
        .then( res => {
          // assert that the HTTP status code is 200
          expect(res.status).toBe(200);
        })
    })

  })
})