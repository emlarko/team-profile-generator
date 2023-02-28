const Manager= require('../lib/Manager');

describe('Manager', () => {
    describe('name', () => {
        it('should get name of manager', () => {
            const manager= new Manager('Emily', 1234, 'emily@email.com', 334567);
            expect(manager.getName()).toEqual(expect.any(String));
        })
    })
});

describe('Manager', () => {
    describe('id', () => {
        it('should get id of manager', () => {
            const manager= new Manager('Emily', 1234, 'emily@email.com', 334567);
            expect(manager.getId()).toEqual(expect.any(Number));
        })
    })
});

describe('Manager', () => {
    describe('email', () => {
        it('should get email of manager', () => {
            const manager= new Manager('Emily', 1234, 'emily@email.com', 334567);
            expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email.toString()));
        })
    })
});

describe('Manager', () => {
    describe('officeNumber', () => {
        it('should get number of manager', () => {
            const manager= new Manager('Emily', 1234, 'emily@email.com', 334567);
            expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
        })
    })
});

describe('Manager', () => {
    describe('role', () => {
        it('should get role of manager', () => {
            const manager= new Manager('Emily', 1234, 'emily@email.com', 334567);
            expect(manager.getRole()).toEqual("Manager");
        })
    })
});
