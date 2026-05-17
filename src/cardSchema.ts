import z from 'zod'

const cardNumberSchema = z
  .string()
  .min(16, 'Card number must be 16 digits')
  .max(16, 'Card number must be 16 digits')
  .regex(/^\d+$/, 'Card number must be digits only')
const cardholderNameSchema = z
  .string()
  .min(1, 'Cardholder name is required')
  .max(50, 'Cardholder name must be less than 50 characters')
const expirationDateSchema = z
  .string()
  .min(5, 'Expiration date must be 5 digits')
  .max(5, 'Expiration date must be 5 digits')
  .regex(/^\d{2}\/\d{2}$/, 'Expiration date must be in MM/YY format')
const cvvSchema = z
  .string()
  .min(3, 'CVV must be 3 digits')
  .max(3, 'CVV must be 3 digits')
  .regex(/^\d+$/, 'CVV must be digits only')

export const cardSchema = z.object({
  cardNumber: cardNumberSchema,
  cardholderName: cardholderNameSchema,
  expirationDate: expirationDateSchema,
  cvv: cvvSchema,
})

export type Card = z.infer<typeof cardSchema>
