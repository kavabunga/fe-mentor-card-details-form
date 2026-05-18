import type { HTMLProps } from 'react'
import styles from './SubmitButton.module.css'

interface SubmitButtonProps extends HTMLProps<HTMLButtonElement> {
  isSubmitting: boolean
  canSubmit: boolean
  label: string
}

export function SubmitButton({ isSubmitting, canSubmit, label, ...props }: SubmitButtonProps) {
  return (
    <button {...props} disabled={!canSubmit} type="submit" className={styles.button}>
      {isSubmitting ? 'Submitting...' : label}
    </button>
  )
}
