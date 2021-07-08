const request = require('supertest');
const server = require('./server');
const db = require('../database/dbConfig');

/* 

Test the following end points:

/api/auth/login
/api/auth/register

*/

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

  describe('POST /api/auth/register', () => {

    beforeEach(async () => {
      await db('users').truncate();
    })

    it('should run without errors', () => {
      expect(true).toBe(true);
    })

    it('should return 201 on success', () => {
      // make a POST request to /api/auth/register endpoint on the server
      return request(server) // return the async call to let jest know it should wait
        .post('/users')
        .send({ username: 'user3', password: 'aqejfap38osj93sli'})
        .then(res => {
          expect(res.status).toBe(201);
        })
    })



  })

  describe('POST /api/auth/login', () => {

    it('should run without errors', () => {
      expect(true).toBe(true);
    })

    it('should return 201 on success', () => {
      // make a POST request to /api/auth/register endpoint on the server
      return request(server) // return the async call to let jest know it should wait
        .post('/users')
        .send({ username: 'user3', password: 'aqejfap38osj93sli'})
        .then(res => {
          expect(res.status).toBe(201);
        })
    })

  })
  
})