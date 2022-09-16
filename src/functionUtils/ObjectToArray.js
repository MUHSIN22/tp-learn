export default (object) => {
    let data = object
    let newError = [];
    console.log(typeof data,data);
    if(typeof data !== "string"){
        data = Object.values(object);
        for(let i=0;i<data.length;i++){
            let item = data[i]
            if(item && typeof item !== "string"){
                for(let j=0;j<item.length;j++){
                    newError.push(item[j])
                }
            }else if(item){
                newError.push(item);
            }
        }
    }else{
        newError.push(data)
    }
    
    return newError;
}