import {aemHost} from '../../config'
import type {Locale} from '../../i18n/locale'
import {AemClient} from '../atd/aem/aem-client'
import {getCms as getAtdCms} from '../atd/cms'

export const getClient = (locale?: Locale) => new AemClient(aemHost, locale)

export const getCms = (locale?: Locale) => getAtdCms(getClient(locale))
