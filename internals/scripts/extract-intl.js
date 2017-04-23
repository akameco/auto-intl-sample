/* eslint-disable */
/**
 * This script will extract the internationalization messages from all components
   and package them in the translation json files in the translations file.
 */
const extractMessage = require('extract-react-intl-messages')
const i18n = require('../../app/i18n')
import { DEFAULT_LOCALE } from '../../app/containers/App/constants'

// Glob to match all js files except test files
const FILES_TO_PARSE = 'app/**/!(*.test).js'
const locales = i18n.appLocales

extractMessage(
  locales,
  FILES_TO_PARSE,
  'app/translations',
  DEFAULT_LOCALE
).then(() => {
  console.log('finish')
})
