import type { HTMLProps } from 'react'
import styles from './TextInput.module.css'

interface TextInputProps extends HTMLProps<HTMLInputElement> {
  label: string
  error?: string
}

export function TextInput({ label, error, ...props }: TextInputProps) {
  return (
    <label className={styles.container}>
      <span className={styles.label}>{label}</span>
      <input className={styles.input} {...props} />
      {error && <span className={styles.error}>{error}</span>}
    </label>
  )
}
