const getLocale = () =>
  navigator && navigator.language && navigator.language.startsWith('sv')
    ? 'sv-SE'
    : 'en-US'

export { getLocale }
