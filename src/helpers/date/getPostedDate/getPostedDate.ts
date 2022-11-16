import {convertMs} from "../convert"

export const getPostedDate = (date:Date) => {
    const postedDate:any = new Date(date)
    const currentDate:any = new Date()
    const delta = currentDate - postedDate
    const deltaDay = convertMs(delta).days
    if(deltaDay > 365){
        const deltaMonth = Math.round(deltaDay / 365)
        return `${deltaMonth} years`
    }
    return deltaDay
}