import { withForm } from './useAppForm'
import { paymentCardFormOptions } from './paymentCardFormOptions'
import styles from './CardFront.module.css'

export const CardFront = withForm({
  ...paymentCardFormOptions,
  render: ({ form }) =>
    form.Subscribe({
      selector: (state) => ({
        cardNumber: state.values.cardNumber,
        cardholderName: state.values.cardholderName,
        expirationDate: state.values.expirationDate,
      }),
      children: (values) => {
        return (
          <div className={styles.card}>
            <p className={styles.cardNumber}>{values.cardNumber}</p>
            <p className={styles.cardholderName}>{values.cardholderName}</p>
            <p className={styles.expirationDate}>{values.expirationDate}</p>
          </div>
        )
      },
    }),
})
