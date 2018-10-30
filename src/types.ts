/** contextual information of a text */
export type Context = {
  path: string
  line?: number | undefined
  column?: number | undefined
  text?: string | undefined
}

/** text to be translated */
export type SourceText =
  | { type: 'string'; text: string; id?: string }
  | {
      type: 'interpolated'
      textParts: string[]
      id?: string
    }

export type SourceTextWithContext = SourceText & {
  context: Context
}

export type TranslateValue = null | string | { [K: string]: string }

export type LocaleResource = {
  [K: string]: TranslateValue
}

export type LocaleResourceExtracted = {
  [K: string]: {
    value: TranslateValue
    contexts: Context[]
  }
}
