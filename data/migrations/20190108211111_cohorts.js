
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cohorts', 
  table => {
    table.increments();
    table.string('name').notNullable()
    table.integer('cohort_id').unsigned().references('id').inTable('cohorts');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cohorts');
};