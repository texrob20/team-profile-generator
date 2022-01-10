const Intern = require('../lib/Intern');

test ('create an intern employee', () =>{
    const intern = new Intern('Bob', 'UTSA');

    expect(intern.school).toBe('UTSA');
    expect(intern.getSchool()).toHaveProperty('school');
    expect(intern.getRole()).toBe('intern');
});