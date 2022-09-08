import React from 'react'
import adventureIcon from '../../../Assets/hobbies/ADVENTURE.png'
import entertainmentIcon from '../../../Assets/hobbies/ENTERTENMENT.png'
import liesureIcon from '../../../Assets/hobbies/LIESURE.png'
import musicIcon from '../../../Assets/hobbies/MUSIC.png'
import sportsIcon from '../../../Assets/hobbies/SPORT.png'
import travelIcon from '../../../Assets/hobbies/TRAVEl.png'
import bookIcon from '../../../Assets/hobbies/BOOK.png'
import './Hobbies.css'
import { useSelector } from 'react-redux'
import { selectHobbies } from '../../../redux/Features/ResumeSlice'

export default function Hobbies() {
    const hobbies = useSelector(selectHobbies)
    const { adventure, any_other, entertainment, music, sports, leisure, travel, books } = useSelector(selectHobbies)
    console.log(hobbies, 'this is hobbies');
    return (
        <div className="cv-profile-container-primary">
            <h2 className="cv-profile-title-primary">Hobbies</h2>
            <div className="hobbies-grid">
                {
                    adventure !== "" &&
                    <div className="hobbies-wrapper">
                        <img src={adventureIcon} alt="" className="hobbie-icon" />
                        <p className="hobbies-text">{adventure}</p>
                    </div>
                }
                {
                    entertainment !== "" &&
                    <div className="hobbies-wrapper">
                        <img src={entertainmentIcon} alt="" className="hobbie-icon" />
                        <p className="hobbies-text">{entertainment}</p>
                    </div>
                }
                {
                    music !== "" &&
                    <div className="hobbies-wrapper">
                        <img src={musicIcon} alt="" className="hobbie-icon" />
                        <p className="hobbies-text">{music}</p>
                    </div>
                }
                {
                    sports !== "" &&
                    <div className="hobbies-wrapper">
                        <img src={sportsIcon} alt="" className="hobbie-icon" />
                        <p className="hobbies-text">{sports}</p>
                    </div>
                }
                {
                    leisure !== "" &&
                    <div className="hobbies-wrapper">
                        <img src={liesureIcon} alt="" className="hobbie-icon" />
                        <p className="hobbies-text">{leisure}</p>
                    </div>
                }
                {
                    travel !== "" &&
                    <div className="hobbies-wrapper">
                        <img src={travelIcon} alt="" className="hobbie-icon" />
                        <p className="hobbies-text">{travel}</p>
                    </div>
                }
                {
                    books !== "" &&
                    <div className="hobbies-wrapper">
                        <img src={bookIcon} alt="" className="hobbie-icon" />
                        <p className="hobbies-text">{books}</p>
                    </div>
                }
                {
                    any_other !== "" &&
                    <div className="hobbies-wrapper">
                        <img src={adventure} alt="" className="hobbie-icon" />
                        <p className="hobbies-text">{any_other}</p>
                    </div>
                }
            </div>
        </div>
    )
}
