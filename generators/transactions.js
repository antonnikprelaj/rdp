var faker = require('faker')

function transactions () {
  var transactions = []
  for (var id = 0; id < 10; id++) {
    transactions.push(faker.helpers.createTransaction())
  }
  return { "transactions": transactions }
}

module.exports = transactions;