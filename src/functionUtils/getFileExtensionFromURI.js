let imageExtension = ['.jpg', '.jpeg', '.png','.svg','.webm']
export default (uri) => {
    let extension = uri.substring(uri.lastIndexOf('.'))
    return imageExtension.includes(extension) ? "image" : "other"
}