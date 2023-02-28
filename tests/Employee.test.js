const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('name', () => {
        it('should get name of employee', () => {
            const employee = new Employee('Emily', 1234, 'emily@email.com');
            expect(employee.getName()).toEqual(expect.any(String));
        })
    })
});

describe('Employee', () => {
    describe('id', () => {
        it('should get id of employee', () => {
            const employee = new Employee('Emily', 1234, 'emily@email.com');
            expect(employee.getId()).toEqual(expect.any(Number));
        })
    })
})

describe('Employee', () => {
    describe('email', () => {
        it('should get email of employee', () => {
            const employee = new Employee('Emily', 1234, 'emily@email.com');
            expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
        })
    })
});

describe('Employee', () => {
    describe('role', () => {
        it('should get role of employee', () => {
            const employee = new Employee('Emily', 1234, 'emily@email.com');
            expect(employee.getRole()).toEqual("Employee");
        })
    })
});