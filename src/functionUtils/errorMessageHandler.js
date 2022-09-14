const errorMessageHandler = (errors) => {
    if(typeof errors === "string"){
        return errors;
    }else{
        for(let i=0;i<Object.values(errors).length; i++){
            let item = Object.values(errors)[i]
            if(item && item[0]){
                return item[0]
            }
        }
    }
}

export default errorMessageHandler;