import { formOptions } from '@tanstack/react-form'
import { cardSchema, type Card } from './cardSchema'

const defaultValues: Card = {
  cardNumber: '',
  cardholderName: '',
  expirationDate: '',
  cvv: '',
}

export const paymentCardFormOptions = formOptions({
  defaultValues,
  validators: {
    onChange: cardSchema,
    onMount: cardSchema,
  },
})
