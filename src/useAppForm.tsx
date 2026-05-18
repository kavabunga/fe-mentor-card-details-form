import { createFormHook, createFormHookContexts } from '@tanstack/react-form'
import { useMaskito } from '@maskito/react'

import { TextInput as TextInputUI, type TextInputProps } from './shared/ui/TextInput'
import { SubmitButton as SubmitButtonUI } from './shared/ui/SubmitButton'
import { cardNumberMask, cvvMask, expirationDateMask } from './shared/lib/masks'

const { fieldContext, formContext, useFieldContext, useFormContext } = createFormHookContexts()

interface FieldProps {
  label: string
}

type TextFieldBaseProps = Partial<TextInputProps> & FieldProps

function TextFieldBase({ label, ...props }: TextFieldBaseProps) {
  const field = useFieldContext<string>()
  const form = useFormContext()

  function focusOnNextEmptyField() {
    const nextField = Object.entries(form.state.values).find(([_, value]) => value === '')?.[0]

    if (nextField) {
      const element = document.querySelector(`[id="${nextField}"]`)
      if (element instanceof HTMLElement) {
        element.focus()
      }
    }
  }

  return (
    <TextInputUI
      id={field.name}
      aria-label={label}
      data-1p-ignore
      label={label}
      isValid={field.state.meta.isValid}
      defaultValue={field.state.value}
      onChange={(e) => field.handleChange(e.target.value)}
      onBlur={field.handleBlur}
      error={
        field.state.meta.isDirty &&
        field.state.meta.isBlurred &&
        !field.state.meta.isValid &&
        field.state.meta.errors?.map((error) => error.message).join(', ')
      }
      {...props}
    />
  )
}

function TextField({ label }: FieldProps) {
  return <TextFieldBase autoComplete="name" label={label} />
}

function CardNumberField({ label }: FieldProps) {
  const field = useFieldContext<string>()
  const inputRef = useMaskito({ options: cardNumberMask })

  return (
    <TextFieldBase
      ref={inputRef}
      autoComplete="cc-number"
      autoFocus
      placeholder="0000 0000 0000 0000"
      label={label}
      onChange={(e) => field.handleChange(e.target.value.replace(/\s/g, ''))}
    />
  )
}

function ExpirationDateField({ label }: FieldProps) {
  const inputRef = useMaskito({ options: expirationDateMask })

  return <TextFieldBase ref={inputRef} autoComplete="cc-exp" placeholder="MM/YY" label={label} />
}

function CVVField({ label }: FieldProps) {
  const inputRef = useMaskito({ options: cvvMask })

  return <TextFieldBase ref={inputRef} autoComplete="cc-csc" label={label} />
}

function SubmitButton({ label }: { label: string }) {
  const form = useFormContext()
  return (
    <form.Subscribe selector={(state) => [state.isSubmitting, state.canSubmit]}>
      {([isSubmitting, canSubmit]) => (
        <SubmitButtonUI isSubmitting={isSubmitting} canSubmit={canSubmit} label={label} />
      )}
    </form.Subscribe>
  )
}

export const { useAppForm, withForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    TextField,
    CardNumberField,
    ExpirationDateField,
    CVVField,
  },
  formComponents: {
    SubmitButton,
  },
})
