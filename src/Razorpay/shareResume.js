import { toast } from "react-toastify";

export default (media,user_id,userName) => {
    let shareLink = "";
    if (media === "whatsapp") {
        shareLink = `https://api.whatsapp.com/send?text=https://talentplace.ai/cv-share/${user_id}`
    } else if (media === "facebook") {
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=https://talentplace.ai/cv-share/${user_id}`
    } else if (media === "linkedin") {
        shareLink = `https://www.linkedin.com/shareArticle?mini=true&url=https://talentplace.ai/cv-share/${user_id}&title=Talentplace of ${userName}&summary=&source=`
    } else if(media === "copy"){
        let copyText = `https://talentplace.ai/cv-share/${user_id}`
        navigator.clipboard.writeText(copyText).then( _ => {
            toast.success("Link copied to clipboard!")
        }).catch( _ => {
            toast.error("Something went wrong in copying! Try again")
        })
        
        return true
    }
    window.open(shareLink, '_blank')
}