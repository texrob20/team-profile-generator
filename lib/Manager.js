const Employee = require('./Employee');

class Manager extends Employee{
    constructor (name, officeNumber){
      super(name);
      this.role = 'manager';
      this.office = officeNumber;
    }
}

module.exports = Manager;