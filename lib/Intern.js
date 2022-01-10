const Employee = require('./Employee');

class Intern extends Employee{
    constructor (name, school){
      super(name);
      this.school = school;
      this.role = 'intern';     
    }

    getSchool(){
      return {
          school: this.school
      }  
    }
}

module.exports = Intern;