var faker = require('faker')

function users () {
  var users = []
  for (var id = 0; id < 100; id++) {
    users.push(faker.helpers.contextualCard())
  }
  return { "users": users }
}

module.exports = users