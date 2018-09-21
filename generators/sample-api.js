var faker = require('faker')

function users () {
  var users = []
  for (var id = 0; id < 100; id++) {
    users.push({
      "id": id,
      "name": faker.name.findName(),
      "email": faker.internet.email(),
      "address": faker.address.streetAddress(),
      "avatar":  faker.internet.avatar()
    })
  }
  return { "users": users }
}

module.exports = users