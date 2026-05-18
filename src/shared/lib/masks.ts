import type { MaskitoOptions } from '@maskito/core'

export const cardNumberMask: MaskitoOptions = {
  mask: [
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ],
  preprocessors: [
    ({ elementState, data }) => {
      const { value, selection } = elementState

      return {
        elementState: {
          selection,
          value: value.replace(/\s/g, ''),
        },
        data: data.replace(/\s/g, ''),
      }
    },
  ],
}

export const expirationDateMask: MaskitoOptions = {
  mask: [/[01]/, /\d/, '/', /\d/, /\d/],
}

export const cvvMask: MaskitoOptions = {
  mask: [/\d/, /\d/, /\d/],
}
