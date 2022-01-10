const Engineer = require('../lib/Engineer');

test ('create an engineer employee', () =>{
    const engineer = new Engineer('Bob', '1', 'bob@company.com');

    expect(engineer.github).toBe('bob123');
    expect(engineer.getGitHub()).toHaveProperty('github');
    expect(employee.getRole()).toBe('engineer');
});