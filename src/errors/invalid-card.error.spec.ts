import { InvalidCardError } from './invalid-card.error'

describe('InvalidCardError', ()=> {

	it('Validar creacion', () => {
		expect(new InvalidCardError()).toBeDefined()
	})

	it('Validar mensaje', () => {
		expect(new InvalidCardError().message).toBe('Tarjeta invalida')
	})
})
