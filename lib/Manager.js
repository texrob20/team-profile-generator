const Employee = require('./Employee');
// creates Manager class using Employee class
class Manager extends Employee{
    constructor (name, id, email, officeNumber){
      super(name, id, email);
      this.role = 'Manager';
      this.office = officeNumber;
    }
}

module.exports = Manager;