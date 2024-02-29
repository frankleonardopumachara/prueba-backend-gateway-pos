import * as dotenv from 'dotenv';
dotenv.config();
import * as express from 'express'
import { NextFunction, Request, Response } from 'express'
import { isValidCard } from './middlewares/validate-card'
import { isValidPk } from './middlewares/validate-pk'
import tokenizerService from './services/tokenizer.service'
import { CardInformation } from './types'
import { v4 as uuid } from 'uuid';
import { Redis } from 'ioredis'
import { errorHandler } from './handlers/error.handler'

const app = express()
const redis = new Redis()

app.use(express.json())

app.route('/tokens')
	.post(isValidPk, isValidCard, async (req: Request, res: Response) => {
		const token = tokenizerService.signIn(req.body as CardInformation);
		await redis.set(uuid(), token)

		res.status(200).json({ token })
	})
	.get(isValidPk, (req: Request, res: Response, next: NextFunction) => {
		try {
			const cardInfo = tokenizerService.verify(req.headers.token as string)
			res.status(200).json(cardInfo)
		} catch (error) {
			next(error)
		}
	})

app.use(errorHandler)

app.listen(3000, () => {
	console.log('SERVER RUNNING....')
})
