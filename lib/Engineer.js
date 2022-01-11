const Employee = require('./Employee');
// creates Engineer class using Employee class
class Engineer extends Employee{
    constructor (name, id, email, github){
      super(name, id, email);
      this.github = github;
      this.role = 'Engineer';     
    }

    getGitHub(){
      return {
          github: this.github
      }  
    }
}

module.exports = Engineer;