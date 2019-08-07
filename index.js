// Write your solution in this file!

let driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  // Alternate using ES6 Spread operators:
  // return { ...driver, ...{ [key]: value } }
  return Object.assign({}, driver, { [key]: value });
}