const db = require('../database/dbConfig');

module.exports = {
  add, 
  find,
  findById
}

function find() {
  return db('users').select('id', 'username', 'password')
}

function add() {

}

function findById() {
  
}