import { ChangeEvent, FocusEvent, forwardRef } from 'react'
import { useFormContext } from 'react-hook-form'

import { Input, InputProps } from '@/components/ui/input'

interface CustomInputProps extends InputProps {
  changeTrigger?: boolean
}

export const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  (props, ref) => {
    const { name, onBlur, onChange, changeTrigger, ...rest } = props
    const { trigger } = useFormContext()

    const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
      trigger(name as string)
      if (onBlur) onBlur(event)
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (changeTrigger) trigger(name as string)
      if (onChange) onChange(event)
    }

    return (
      <Input
        {...rest}
        name={name}
        onBlur={handleBlur}
        ref={ref}
        onChange={handleChange}
      />
    )
  },
)
