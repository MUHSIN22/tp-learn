import countryCode from "../JSON DB/countryCode"

export default (input) => {
    countryCode.filter((item) => {
        const regex = new RegExp(`^+${input}`,"gi")
        return item.dial_code.match(regex)
    })
}