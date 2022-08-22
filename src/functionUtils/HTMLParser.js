import { Text } from '@react-pdf/renderer';
import ReactHtmlParser from 'react-html-parser';
export const HTMLParser = (taskDescription) => {
    let returnContent;
    if(taskDescription){
        const parsedHTML = ReactHtmlParser(taskDescription);
        parsedHTML.forEach(element => {
            console.log("this is element",element);
            const type = element.type;
            element.props.children.forEach(content => {
                switch(type){
                    case "p":
                        returnContent = (<Text>{content}</Text>)
                        break;
                    default:
                        returnContent = (<Text>{content}</Text>)
                }
            })
        })
        console.log(returnContent,'this is return content');
        return returnContent;
    }else{
        return returnContent;
    }
}