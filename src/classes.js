/**
 * Class to create a Programmer
 * 
 * @example
 * const newProgramer = new Programmer({ name: 'Brandon', id: 3, isActive: true }, 'javascript')
 * newProgramer.getInfo() // I'm ---Brandon--- and my favorite programming language is ---javascript---
 * 
 * @see https://jsdoc.app/howto-es2015-classes.html
 * @todo Implement the rest of methods
 */

class Programmer {
  /**
   * @param {User} user User's Information
   * @param {string} language A programming language
   */
  constructor (user, language) {
    this.fullName = user.name
    this.language = language
  }

  /**
   * Get programmer information
   * @returns {void}
   */
  getInfo () {
    console.log(`I'm ${this.fullName} and my favorite programming language is ${this.language}`)
  }
}

/**
 * Know more in {@link Programmer}
 */
const programmerOne = new Programmer({ name: 'Brandon', id: 3, isActive: true }, 'javascript')
const programmerTwo = new Programmer({ name: 'Brandon', id: 3, isActive: true }, 'go')

programmerOne.getInfo()
programmerTwo.getInfo()
