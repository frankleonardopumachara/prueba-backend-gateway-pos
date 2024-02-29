import { NextFunction, Request, Response } from 'express'
import { InvalidPkError } from '../errors/invalid-pk.error'
import { InvalidCardError } from '../errors/invalid-card.error'
import { TokenExpiredError } from 'jsonwebtoken'

export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
	if(error instanceof InvalidPkError || error instanceof InvalidCardError || error instanceof TokenExpiredError) {
		res.status(400).json({error: error?.message || 'algo salio mal!'})
		return
	}

	res.status(500).json({error: 'Error interno del servidor'})
}
