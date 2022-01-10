const Employee = require('./Employee');

class Engineer extends Employee{
    constructor (name, github){
      super(name);
      this.github = github;
      this.role = 'engineer';     
    }

    getGitHub(){
      return {
          github: this.github
      }  
    }
}

module.exports = Engineer;