import moment from "moment";

export default (date) => {
    if(date && date !== ""){
        let splittedDate = date.split("-")
        let dateObj = new Date(`${splittedDate[1]}-${splittedDate[0]}-${splittedDate[2]}`)
        return moment(dateObj).format('MMM YYYY');
    }else{
        return 'Invalid date'
    }
}