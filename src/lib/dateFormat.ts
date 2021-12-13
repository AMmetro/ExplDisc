import {startOfMonth, format} from 'date-fns'

class DateFormat {
  static formatDateToString = (date: Date) => {
    return date.toLocaleString()
  }
  static getFirstDayOfMonth = (date: Date) => {
    let firstDayOfMonth = format(startOfMonth(date), 'yyyy-MM-dd')
    return firstDayOfMonth
  }
}
export default DateFormat
