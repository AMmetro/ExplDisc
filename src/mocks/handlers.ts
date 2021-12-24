import {countries} from './handlers/aem/countries'
import {authenticate} from './handlers/authenticate'
import {dashboard} from './handlers/dashboard'
import {loginLms} from './handlers/login-lms'
import {myme} from './handlers/myme'
// import {myme} from './handlers/myme'
import {promotionProgress} from './handlers/partner-loyalty'

export const handlers = [
  countries,
  authenticate,
  dashboard,
  loginLms,
  // me,
  myme,
  promotionProgress,
]
