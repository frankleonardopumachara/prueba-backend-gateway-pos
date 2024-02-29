import { isNotEmpty, isString, length } from 'class-validator'
import { NextFunction, Request, Response } from 'express'
import { InvalidPkError } from '../errors/invalid-pk.error'

export const isValidPk = (req: Request, res: Response, next: NextFunction) => {
	const pk = req.headers.pk as string
	if (isNotEmpty(pk) && isString(pk) && length(pk, 24, 24)) {
		next()
	} else {
		next(new InvalidPkError())
	}
}
