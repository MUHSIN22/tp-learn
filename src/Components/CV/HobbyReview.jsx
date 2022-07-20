import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import hobbyImage from '../../Assests/HobbyImage.png'
import hobbyImage2 from "../../Assests/hobbyImage2.svg"
import hobbyImage3 from "../../Assests/hobbyImage3.svg"
import hobbyImage4 from "../../Assests/hobbyImage4.svg"
import { selectHobbies,selectToEdit,changeEditPageDetails,changeToEdit } from '../../redux/Features/ResumeSlice'
import { FaPencilAlt } from "react-icons/fa";

export default function HobbyReview() {
    const hobby = useSelector(selectHobbies)
    const dispatch = useDispatch();
    const toEdit = useSelector(selectToEdit);
    const handleEditForms = (data) => {
    dispatch(changeEditPageDetails(data)).unwrap();
  };
    return (
        <div className="col-50 section_2 align-center">
            <div className="col-90 align-start tex-left">
                <h3>Hobbies {toEdit && (
                     <span onClick={() => handleEditForms({ progress: 13,hobby})} className="px-1"><FaPencilAlt /></span>
                    )}</h3>
                <span className="divider"></span>
                {hobby && <div className="hobby grid-auto">
                    <HobbyCard name={'Entertainment'} hobby={hobby} />
                    <HobbyCard name={'Music'} hobby={hobby} />
                    <HobbyCard name={'Sports'} hobby={hobby} icon={hobbyImage2}/>
                    <HobbyCard name={'Leisure'} hobby={hobby} icon={hobbyImage3}/>
                    <HobbyCard name={'Adventure'} hobby={hobby} icon={hobbyImage4}/>
                    <HobbyCard name={'travel'} hobby={hobby} />
                    <HobbyCard name={'books'} hobby={hobby}/>
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

        <div className="hobby-card g-1">
            <img src={icon || hobbyImage} alt="" />
            <div className="align-center">
                <h5>{arr.map(hobby => hobby)}</h5>
            </div>

        </div>


    )
}