export const PDF_TABLE_FIELDS = [
  'filename',
  'type',
  {
    key: 'custom_text',
    label: 'Text',
    class: 'pdf-text'
  },
  'created_at',
  'updated_at',
  'actions'
]

export const PDF_FORM_NEW_ITEMS = [
  {
    model_name: 'text_short',
    type: 'Short'
  },
  {
    model_name: 'text_full',
    type: 'Full'
  },
  {
    model_name: 'text_advanced',
    type: 'Advanced'
  }
]

export const PDF_TYPES = {
  SHORT: 0,
  FULL: 1,
  ADVANCED: 2
}

export const PDF_TYPE_TITLES = {
  [PDF_TYPES.SHORT]: 'Short',
  [PDF_TYPES.FULL]: 'Full',
  [PDF_TYPES.ADVANCED]: 'Advanced'
}
