import { createFormHook, createFormHookContexts } from '@tanstack/react-form'
import { TextInput as TextInputUI } from './shared/ui/TextInput'
import { SubmitButton as SubmitButtonUI } from './shared/ui/SubmitButton'

const { fieldContext, formContext, useFieldContext, useFormContext } = createFormHookContexts()

interface TextFieldProps {
  label: string
}

function TextField({ label }: TextFieldProps) {
  const field = useFieldContext<string>()
  return (
    <TextInputUI
      label={label}
      value={field.state.value}
      onChange={(e) => field.handleChange(e.target.value)}
      error={field.state.meta.errors?.map((error) => error.message).join(', ')}
    />
  )
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
  },
  formComponents: {
    SubmitButton,
  },
})
