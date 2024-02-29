import { TokenizerService } from './tokenizer.service'

describe('TokenizerService', () => {
	let service: TokenizerService

	beforeAll(() => {
		process.env.JWT_SECRET_KEY = 'muy_secreto'
		service = new TokenizerService()
	})

	it('Firma de token', () => {
		const cardInfo = {
			email: 'gian.corzo@gmail.com',
			card_number: '4111111111111111',
			cvv: '12345',
			expiration_year: '2025',
			expiration_month: '09'
		}

		expect(service.signIn(cardInfo)).toBeDefined()
	})
})
