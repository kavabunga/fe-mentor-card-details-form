import { type SyntheticEvent } from 'react'

import { withForm } from './useAppForm'
import { paymentCardFormOptions } from './paymentCardFormOptions'

import styles from './PaymentCardForm.module.css'

export const PaymentCardForm = withForm({
  ...paymentCardFormOptions,
  render: ({ form }) => {
    function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
      e.preventDefault()
      form.handleSubmit()
    }

    return (
      <form className={styles.form} onSubmit={handleSubmit}>
        <form.AppForm>
          <form.AppField
            name="cardNumber"
            children={(field) => <field.CardNumberField label={'Card Number'} />}
          />
          <form.AppField
            name="cardholderName"
            children={(field) => <field.TextField label={'Cardholder Name'} />}
          />
          <form.AppField
            name="expirationDate"
            children={(field) => <field.ExpirationDateField label={'Expiration Date'} />}
          />
          <form.AppField name="cvv" children={(field) => <field.CVVField label={'CVV'} />} />
          <form.SubmitButton label="Submit" />
        </form.AppForm>
      </form>
    )
  },
})
