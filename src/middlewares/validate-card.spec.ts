import { isValidCard } from './validate-card'
import { NextFunction, Request, Response } from 'express'

describe('ValidateCard', () => {

	it('validar datos tarjeta', () => {
		const cardInfo = {
			email: "gian.corzo@gmail.com",
			card_number: "4111111111111111",
			cvv: "123",
			expiration_year: "2025",
			expiration_month: "09"
		}

		const req = {
			body: cardInfo
		} as Request
		const res = {} as Response
		const next = jest.fn()
		isValidCard(req, res, next)

		expect(next).toHaveBeenCalledWith();
	})

	it('validar datos tarjeta', () => {
		const cardInfo = {
			email: "gian.corzo@gmail.com",
			card_number: "4111111111111111",
			cvv: "12345",
			expiration_year: "2025",
			expiration_month: "09"
		}

		const req = {
			body: cardInfo
		} as Request
		const res = {} as Response
		const next = jest.fn()
		isValidCard(req, res, next)

		expect(next).toHaveBeenCalledWith(expect.any(Error));
	})
})
