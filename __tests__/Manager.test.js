const Manager = require('../lib/Manager');

test ('create an manager employee', () => {
    const manager = new Manager('Bob', '1', 'bob@company.com', '101');

    expect(manager.office).toBe('101');
    expect(manager.getRole()).toBe('Manager');
});
