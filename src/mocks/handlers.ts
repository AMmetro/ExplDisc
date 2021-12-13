import {countries} from './handlers/aem/countries'
import {authenticate} from './handlers/authenticate'
import {dashboard} from './handlers/dashboard'
import {loginLms} from './handlers/login-lms'
import {me} from './handlers/me'
import {promotionProgress} from './handlers/partner-loyalty'

export const handlers = [
  countries,
  authenticate,
  dashboard,
  loginLms,
  me,
  promotionProgress,
]
