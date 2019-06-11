const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    findUsers,
    findBy,
    addUser}
    function addUser(user){
        return db('LoginTable').insert(user)
    }

    function findUsers(){
        return db('LoginTable')
    }

    function findBy(filter) {
        return db('LoginTable').where(filter);
      }

    