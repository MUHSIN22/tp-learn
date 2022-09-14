export default (object) => {
    let data = Object.values(object)
    let newError = [];
    console.log(data);
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
    return newError;
}