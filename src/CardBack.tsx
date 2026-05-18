import { withForm } from './useAppForm'
import { paymentCardFormOptions } from './paymentCardFormOptions'
import styles from './CardBack.module.css'

export const CardBack = withForm({
  ...paymentCardFormOptions,
  render: ({ form }) =>
    form.Subscribe({
      selector: (state) => ({
        cvv: state.values.cvv,
      }),
      children: (values) => {
        return (
          <div className={styles.card}>
            <p className={styles.cvv}>{values.cvv}</p>
          </div>
        )
      },
    }),
})
