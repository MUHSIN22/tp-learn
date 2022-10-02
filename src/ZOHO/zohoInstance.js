import axios from "axios";
import config from "../constants/config";

export const generateToken = () => {
    axios.post(`https://accounts.zoho.in/oauth/v2/token?refresh_token=${config.refreshToken}&client_id=${config.clientID}&client_secret=${config.clientSecret}&grant_type=refresh_token`)
        .then((res) => {
            console.log(res);
        })
}

export default axios.create({
    baseURL: config.baseURL,
    headers: {
        "X-com-zoho-subscriptions-organizationid":config.organizationID,
        "Authorization": `Zoho-oauthtoken ${generateToken()}`
    }
})

