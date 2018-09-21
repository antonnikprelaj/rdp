var faker = require('faker')

function list () {
  var list = []
  for (var id = 0; id < 10; id++) {
    list.push(faker.helpers.createCard())
  }
  return { "list": list }
}

module.exports = list;