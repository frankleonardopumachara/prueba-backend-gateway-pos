import { NextFunction, Request, Response } from 'express'
import { isValidPk } from './validate-pk'
import { InvalidPkError } from '../errors/invalid-pk.error'

describe('ValidatePK', () => {
	it('PK correcto', () => {
		const req = {
			headers: {
				pk: 'pk_test_LsRBKejzCOEEWOsW'
			}
		} as any
		const res = {} as Response
		const next = jest.fn()

		isValidPk(req, res, next)
		expect(next).toHaveBeenCalledWith();
	})

	it('PK incorrecto', () => {
		const req = {
			headers: {
				pk: 'invalido'
			}
		} as any
		const res = {} as Response
		const next = jest.fn()

		isValidPk(req, res, next)
		expect(next).toHaveBeenCalledWith(expect.any(InvalidPkError));
	})
})
