const Manager = require('../lib/Manager');

test ('create an manager employee', () =>{
    const manager = new Manager('Bob', '1', 'bob@company.com');

    expect(manager.officeNumber).toBe('101');
    expect(employee.getRole()).toBe('manager');
});
