const lastNames = require('./lastNamesRu')
const firstNames = require('./firstNamesRu')

// Get random element from dictionary
const randItem = (dict) => dict[Math.floor(Math.random() * dict.length)]

exports.randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

exports.randomName = () => randItem(lastNames) + ' ' + randItem(firstNames)
