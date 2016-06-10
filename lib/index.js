'use strict';

// Define a function named selectCustomerNames that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually returns the names of all the customers
// from the database.
//
// Example:
//    [
//      { name: 'Johnny Walker' },
//      { name: 'Percy DoLittle' },
//      ...
//    ]

// Basic Select Queries:

module.exports.selectCustomerNames = function(knex) {
  return knex('customers').select('name');
}

module.exports.selectAllRestaurants = function(knex) {
  return knex('restaurants').select();
}

module.exports.selectCustomerById =  function(knex) {
  return knex('dishes').where('id', 1);
}

module.exports.selectCityById =  function(knex) {
  return knex('cities').where('id', 3);
}

module.exports.selectNumberOfDistinctCities = function(knex) {
  return knex('cities').countDistinct();
}

module.exports.selectCheapestDish = function(knex) {
  return knex('dishes').min('cost');
}


// Basic Insert Queries:

module.exports.addRestaurant = function(knex) {
  return knex('restaurants').insert({
      id: 4,
      name: 'Sheesh Kabob',
      kind: 'Iranian',
      bio: 'Be amazed, our chef bobs like no other!',
      dollars: '4',
      opened_at: new Date(1977, 3, 1),
      created_at: new Date(),
      updated_at: new Date()
    });
}

module.exports.addCustomer = function(knex) {
  return knex('customers').insert({
    id: 7,
    name: 'the connoisseur',
    email: 'loveIt@bomb.com',
    created_at: new Date(),
    updated_at: new Date()
  });
}

module.exports.addNewDishToHals = function(knex) {
  return knex('dishes').insert({
    id: 1,
    restaurant_id: 1,
    name: 'the killer chili dawg',
    description: 'The ULTIMATE test.',
    cost: 7.65,
    vegetarian_at: null,
    gluten_free_at: null,
    created_at: new Date(),
    updated_at: new Date()
  });
}
module.exports.selectCustomerNames = function(knex) {
  return knex('customers').select('name');
}
module.exports.selectCustomerNames = function(knex) {
  return knex('customers').select('name');
}
module.exports.selectCustomerNames = function(knex) {
  return knex('customers').select('name');
}
module.exports.selectCustomerNames = function(knex) {
  return knex('customers').select('name');
}
module.exports.selectCustomerNames = function(knex) {
  return knex('customers').select('name');
}
module.exports.selectCustomerNames = function(knex) {
  return knex('customers').select('name');
}
module.exports.selectCustomerNames = function(knex) {
  return knex('customers').select('name');
}
module.exports.selectCustomerNames = function(knex) {
  return knex('customers').select('name');
}
module.exports.selectCustomerNames = function(knex) {
  return knex('customers').select('name');
}
module.exports.selectCustomerNames = function(knex) {
  return knex('customers').select('name');
}
module.exports.selectCustomerNames = function(knex) {
  return knex('customers').select('name');
}
module.exports.selectCustomerNames = function(knex) {
  return knex('customers').select('name');
}
module.exports.selectCustomerNames = function(knex) {
  return knex('customers').select('name');
}
module.exports.selectCustomerNames = function(knex) {
  return knex('customers').select('name');
}
module.exports.selectCustomerNames = function(knex) {
  return knex('customers').select('name');
}
module.exports.selectCustomerNames = function(knex) {
  return knex('customers').select('name');
}
module.exports.selectCustomerNames = function(knex) {
  return knex('customers').select('name');
}
// SELECT | selectWhatever
// INSERT | createWhatever
// UPDATE | updateWhatever
// DELETE | deleteWhatever