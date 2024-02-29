import { InvalidPkError } from './invalid-pk.error'

describe('InvalidPKError', () => {

	it('crear error', () => {
		expect(new InvalidPkError()).toBeDefined()
	})

	it('validar mensaje', () => {
		expect(new InvalidPkError().message).toBe('Pk invalido')
	})
})
