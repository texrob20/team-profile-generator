const Employee = require('./Employee');

class Manager extends Employee{
    constructor (name, id, email, officeNumber){
      super(name, id, email);
      this.role = 'manager';
      this.office = officeNumber;
    }
}

module.exports = Manager;