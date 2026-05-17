import { CardFront } from './CardFront'
import { CardBack } from './CardBack'
import { useAppForm } from './useAppForm'
import { PaymentCardForm } from './PaymentCardForm'
import { paymentCardFormOptions } from './paymentCardFormOptions'
import styles from './App.module.css'

export function App() {
  const form = useAppForm({
    ...paymentCardFormOptions,
    onSubmit: console.log,
  })

  return (
    <div className={styles.app}>
      <div className={styles.panel}>
        <PaymentCardForm form={form} />
      </div>
      <div className={styles.panel}>
        <CardFront form={form} />
        <CardBack form={form} />
      </div>
    </div>
  )
}
