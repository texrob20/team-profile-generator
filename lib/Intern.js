const Employee = require('./Employee');
// creates Intern class using Employee class
class Intern extends Employee{
    constructor (name, id, email, school){
      super(name, id, email);
      this.school = school;
      this.role = 'Intern';     
    }

    getSchool(){
      return {
          school: this.school
      }  
    }
}

module.exports = Intern;