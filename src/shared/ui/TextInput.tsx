import type { HTMLProps, RefCallback } from 'react'

import cn from 'classnames'

import styles from './TextInput.module.css'

export interface TextInputProps extends HTMLProps<HTMLInputElement> {
  isValid: boolean
  label: string
  error?: string
  ref?: RefCallback<HTMLElement>
}

export function TextInput({ label, error, ref, isValid, ...props }: TextInputProps) {
  return (
    <label className={styles.container}>
      <span className={styles.label}>{label}</span>
      <input
        className={cn(styles.input, { [styles.isValid]: isValid, [styles.isError]: !!error })}
        {...props}
        ref={ref}
      />
      {error && <span className={styles.error}>{error}</span>}
    </label>
  )
}
