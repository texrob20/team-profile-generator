const Employee = require('./Employee');

class Intern extends Employee{
    constructor (name, id, email, school){
      super(name, id, email);
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