import { paymentCardFormOptions } from './paymentCardFormOptions'
import { withForm } from './useAppForm'
import styles from './PaymentCardForm.module.css'

export const PaymentCardForm = withForm({
  ...paymentCardFormOptions,
  render: ({ form }) => {
    return (
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault()
          form.handleSubmit()
        }}
      >
        <form.AppField
          name="cardNumber"
          children={(field) => <field.TextField label={'Card Number'} />}
        />
        <form.AppField
          name="cardholderName"
          children={(field) => <field.TextField label={'Cardholder Name'} />}
        />
        <form.AppField
          name="expirationDate"
          children={(field) => <field.TextField label={'Expiration Date'} />}
        />
        <form.AppField name="cvv" children={(field) => <field.TextField label={'CVV'} />} />
        <form.AppForm>
          <form.SubmitButton label="Submit" />
        </form.AppForm>
      </form>
    )
  },
})
