import { errorHandler } from './error.handler'
import { InvalidPkError } from '../errors/invalid-pk.error'
import { NextFunction, Request, Response } from 'express'

describe('ErrorHandler', () => {

	it('Validar codigo bad request', () => {
		const req = {} as Request
		const json = jest.fn()
		const res  = {
			status: jest.fn(() => ({json}))
		}
		const  next = {} as NextFunction
		errorHandler(new InvalidPkError(), req, res as any, next)
		expect(json).toHaveBeenCalled()
	})

	it('Validar internal error', () => {
		const req = {} as Request
		const json = jest.fn()
		const res  = {
			status: jest.fn(() => ({json}))
		}
		const  next = {} as NextFunction
		errorHandler(new Error(), req, res as any, next)
		expect(json).toHaveBeenCalled()
	})
})
