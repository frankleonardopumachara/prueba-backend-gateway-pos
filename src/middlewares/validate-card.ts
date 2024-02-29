import { NextFunction, Request, Response } from 'express'
import { isEmail, isIn, isNumberString, isString, length } from 'class-validator'
import { CardInformation } from '../types'
import * as luhn from 'luhn'
import { InvalidCardError } from '../errors/invalid-card.error'

export const isValidCard = (req: Request, res: Response, next: NextFunction) => {
	const cardInformation: CardInformation = req.body

	const isValidEmail = isEmail(cardInformation.email, { host_whitelist: ['gmail.com', 'hotmail.com', 'yahoo.es'] }) && length(cardInformation.email, 5, 100)
	const isValidCardNumber = luhn.validate(cardInformation.card_number) && length(cardInformation.card_number,13, 16)
	const isValidCVV = isNumberString(cardInformation.cvv) && length(cardInformation.cvv,3, 4)
	const isValidExpirationYear = isNumberString(cardInformation.expiration_year) && length(cardInformation.expiration_year,4,4)
	const isValidExpirationMonth = isString(cardInformation.expiration_month) && length(cardInformation.expiration_month, 1,2) && isIn(cardInformation.expiration_month, [
		'1',
		'01',
		'2',
		'02',
		'3',
		'03',
		'4',
		'04',
		'5',
		'05',
		'6',
		'06',
		'7',
		'07',
		'8',
		'08',
		'9',
		'09',
		'10',
		'11',
		'12',
	])
	if(isValidEmail && isValidCardNumber && isValidCVV && isValidExpirationYear && isValidExpirationMonth) {
		next()
	} else {
		next(new InvalidCardError())
	}
}
