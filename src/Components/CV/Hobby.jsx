import React from 'react'
import { useSelector } from 'react-redux'
import hobbyImage from '../../Assests/HobbyImage.png'
import { selectHobbies } from '../../redux/Features/ResumeSlice'
export default function Hobby() {
    const hobby = useSelector(selectHobbies)

    return (
        <div className="col-50 section_2 align-center">
            <div className="col-90 align-start tex-left">
                <h3>Hobbies</h3>
                <span className="divider"></span>
                {hobby && <div className="hobby grid-auto">
                    <HobbyCard name={'Entertainment'} hobby={hobby} />
                    <HobbyCard name={'Music'} hobby={hobby} />
                    <HobbyCard name={'Sports'} hobby={hobby} />
                    <HobbyCard name={'Leisure'} hobby={hobby} />
                    <HobbyCard name={'Adventure'} hobby={hobby} />
                    <HobbyCard name={'travel'} hobby={hobby} />
                    <HobbyCard name={'books'} hobby={hobby} />
                    <HobbyCard name={'Any other'} hobby={hobby} />

                </div>}
            </div>


        </div>
    )
}
function HobbyCard({ name, icon, hobby }) {
    
    let hobbies = hobby[name.toLowerCase()]

    const arr = hobbies ? hobbies.split(',') : []
    return (

        arr.length>0&&

        <div className="hobby-card">
            <div className="flex-row-fit g-0-5 align-center">
                <img src={icon || hobbyImage} alt="" />
                <h5>{name}</h5>
            </div>
            <div className="col-100 ml-3">
                {arr.map((hobby, i) => <div className="flex-row-start g-0-5 align-center"><div className="dot"></div><p>{hobby}</p></div>)}
            </div>

        </div>


    )
}