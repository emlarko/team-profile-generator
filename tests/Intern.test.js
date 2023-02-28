const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('name', () => {
        it('should get name of intern', () => {
            const intern = new Intern('Emily', 1234, 'emily@email.com','UoB');
            expect(intern.getName()).toEqual(expect.any(String));
        })
    })
});

describe('Intern', () => {
    describe('id', () => {
        it('should get id of intern', () => {
            const intern = new Intern('Emily', 1234, 'emily@email.com','UoB');
            expect(intern.getId()).toEqual(expect.any(Number));
        })
    })
});

describe('Intern', () => {
    describe('email', () => {
        it('should get email of intern', () => {
            const intern = new Intern('Emily', 1234, 'emily@email.com', 'UoB');
            expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email.toString()));
        })
    })
});

describe('Intern', () => {
    describe('school', () => {
        it('should get school of intern', () => {
            const intern = new Intern('Emily', 1234, 'emily@email.com', 'UoB');
            expect(intern.getSchool()).toEqual(expect.any(String));
        })
    })
});

describe('Intern', () => {
    describe('role', () => {
        it('should get role of intern', () => {
            const intern = new Intern('Emily', 1234, 'emily@email.com', 'UoB');
            expect(intern.getRole()).toEqual("Intern");
        })
    })
});
