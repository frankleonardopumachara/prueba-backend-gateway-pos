import * as process from 'process'
import * as jwt from 'jsonwebtoken'
import { CardInformation } from '../types'

export class TokenizerService {
	private readonly secretKey = process.env.JWT_SECRET_KEY

	signIn(cardInformation: CardInformation): string {
		const payload = {
			cardInfo: cardInformation,
		}
		return jwt.sign(payload, this.secretKey)
	}

	verify(token: string) {
		const payload: any = jwt.verify(token, this.secretKey)
		const {cvv, ...others} = payload.cardInfo as CardInformation
		return others
	}
}

export default new TokenizerService()
