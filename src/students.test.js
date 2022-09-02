const student = require('./student')

describe('Teste para alunos', () => {
    it('Deve retorna 0 quando uma das for zero', () => {
        const notes = [1, 2, 3, 0]
        expect(student.sum(notes)).toEqual(0)
    })
})