const Employee = require('../lib/Employee');

test ('create an employee object', () =>{
    const employee = new Employee('Bob', '1', 'bob@company.com');

    expect(employee.name).toBe('Bob');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('bob@company.com');
});

test ('get employee information', () =>{
    const employee = new Employee('Bob', '1', 'bob@company.com');
    
    expect(employee.getName()).toHaveProperty('name');
    expect(employee.getId()).toHaveProperty('id');
    expect(employee.getEmail()).toHaveProperty('email');
    expect(employee.getRole()).toHaveProperty('role');
})