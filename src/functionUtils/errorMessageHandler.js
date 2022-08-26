const errorMessageHandler = (errors) => {
    if(typeof errors === "string"){
        return errors;
    }else{
        for(let i=0;i<Object.values(errors).length - 1; i++){
            let item = Object.values(errors)[i]
            console.log(item,"error");
            if(item && item[0]){
                console.log("error here");
                return item[0]
            }
        }
    }
}

export default errorMessageHandler;