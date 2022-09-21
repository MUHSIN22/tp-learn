import moment from "moment";

export default (date) => {
    console.log(date);
    let formattedDate
    if(date.length === 10){
        formattedDate = moment(date,'yyyy-mm-dd').format('yyyy-mm');
        console.log(formattedDate,'formated date');
    }
    return formattedDate ? formattedDate : date
}