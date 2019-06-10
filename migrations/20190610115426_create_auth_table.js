
exports.up = function(knex, Promise) {
    return knex.schema.createTable('LoginTable', tbl => {
        //each table needs primary key, the .increment() below throws one on
        //calls it 
        tbl.increments();
        tbl.string('username').notNullable().unique();
        tbl.string('password').notNullable().unique(); // created_at & updated at


    });
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('LoginTable');
  
};
