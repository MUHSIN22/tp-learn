import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { selectCountryCodes } from '../../redux/Features/MasterSlice';
// import countryCode from '../../JSON DB/countryCode'

export default function CountryInput({setCountryCode}) {
    const countryCode = useSelector(selectCountryCodes)
    const [countryCodeList, setCountryCodeList] = useState();
    const [dialCode, setDialCode] = useState("+91");
    const [flag, setFlag] = useState("🇮🇳")
    const [isSearching, setSearching] = useState(false);
    const [searchText, setSearchText] = useState('+91')

    const handleInputChange = (event) => {
        setSearching(true);
        setSearchText(event.target.value)
        let codes = countryCode;
        let regex = new RegExp(`^${escapeRegExp(event.target.value)}`, "gi")
        codes = countryCode.filter(item => {
            return item.country_code.match(regex)
        })
        setCountryCodeList(codes)
    }

    function escapeRegExp(text) {
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
      }

    return (
        <div className="country-input-container">
            <label htmlFor="">Country Code</label>
            <div className="country-input-wrapper">
                <span>{flag}</span>
                <input type="text" className="country-search" value={!isSearching ? dialCode : searchText} onChange={handleInputChange} />
                {
                    isSearching &&
                    <ul className="country-suggestions">
                        {
                            countryCodeList && countryCodeList[0] ?
                                <>
                                    {
                                        countryCodeList.map((item, index) => (
                                            <li key={index} className="option" onClick={() => {
                                                setDialCode(item.country_code)
                                                setFlag(item.flag)
                                                setSearching(false);
                                                setCountryCode(item.country_code);
                                            }}>{item.country_code}</li>
                                        ))
                                    }
                                </>
                                :
                                <li className="option">No result</li>
                        }
                    </ul>
                }
            </div>
        </div>
    )
}
