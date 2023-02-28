const Engineer= require('../lib/Engineer');

describe('Engineer', () => {
    describe('name', () => {
        it('should get name of engineer', () => {
            const engineer = new Engineer ('Emily', 1234, 'emily@email.com', 'emlarko');
            expect(engineer.getName()).toEqual(expect.any(String));
        })
    })
});

describe('Engineer', () => {
    describe('id', () => {
        it('should get id of engineer', () => {
            const engineer = new Engineer('Emily', 1234, 'emily@email.com', 'emlarko');
            expect(engineer.getId()).toEqual(expect.any(Number));
        })
    })
});

describe('Engineer', () => {
    describe('email', () => {
        it('should get email of engineer', () => {
            const engineer = new Engineer('Emily', 1234, 'emily@email.com', 'emlarko');
            expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email.toString()));
        })
    })
});

describe('Engineer', () => {
    describe('github', () => {
        it('should get github of engineer', () => {
            const engineer = new Engineer('Emily', 1234, 'emily@email.com', 'emlarko');
            expect(engineer.getGithub()).toEqual(expect.any(String));
        })
    })
});

describe('Engineer', () => {
    describe('role', () => {
        it('should get role of engineer', () => {
            const engineer = new Engineer('Emily', 1234, 'emily@email.com');
            expect(engineer.getRole()).toEqual("Engineer");
        })
    })
});

