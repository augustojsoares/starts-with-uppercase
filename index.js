const startsWithUppercase = (word) => {
  if(typeof word === 'string' && word.length){
    return word.charAt(0) !== word.charAt(0).toLowerCase()
  }

  return false
}

module.exports = startsWithUppercase
