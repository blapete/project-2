'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    // Add altering commands here.
    // Return a promise to correctly handle asynchronicity.

    // Example:
    return queryInterface.bulkInsert('Spots', [
      {
        "spot_name": "Ricobenes",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "spot_name": "Nevermore",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "spot_name": "Crisp",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "spot_name": "Marias Packaged Goods",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "spot_name": "ALoha Eats",
        "createdAt": new Date(),
        "updatedAt": new Date()
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
