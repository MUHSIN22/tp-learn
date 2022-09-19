export default (media,user_id) => {
    let shareLink = "";
    if (media === "whatsapp") {
        shareLink = `https://api.whatsapp.com/send?text=https://talentplace.ai/cv-share/${user_id}`
    } else if (media === "facebook") {
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=https://talentplace.ai/cv-share/${user_id}`
    } else if (media === "instagram") {
        shareLink = `https://www.instagram.com/direct?url=https://talentplace.ai/cv-share/${user_id}`
    }
    window.open(shareLink, '_blank')
}