import moment from "moment";

export default (date) => {
    let formattedDate
    if(date && date.length === 10){
        formattedDate = moment(date,'yyyy-mm-dd').format('yyyy-mm');
    }
    return formattedDate ? formattedDate : date
}