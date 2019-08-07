// Write your solution in this file!

let driver = {}

function UpdateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({},driver, {[key] : value});
}
