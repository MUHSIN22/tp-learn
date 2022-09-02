import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import adventure from '../../Assets/hobbies/ADVENTURE.png'
import entertainment from '../../Assets/hobbies/ENTERTENMENT.png'
import liesure from '../../Assets/hobbies/LIESURE.png'
import music from '../../Assets/hobbies/MUSIC.png'
import sports from '../../Assets/hobbies/SPORT.png'
import travel from '../../Assets/hobbies/TRAVEl.png'
import book from '../../Assets/hobbies/BOOK.png'
import { selectHobbies, selectToEdit, changeEditPageDetails, changeToEdit } from '../../redux/Features/ResumeSlice'
import { FaPencilAlt } from "react-icons/fa";

export default function HobbyReview() {
    const hobby = useSelector(selectHobbies)
    const dispatch = useDispatch();
    const toEdit = useSelector(selectToEdit);
    const handleEditForms = (data) => {
        dispatch(changeEditPageDetails(data)).unwrap();
    };
    return (
        <>
            {
                (hobby.entertainment || hobby.adventure || hobby.any_other || hobby.books || hobby.leisure || hobby.music || hobby.sports || hobby.travel) &&
                <div className="col-50 section_2 align-center" style={{ width: '100%' }} >
                    <div className="col-90 align-start tex-left">
                        <h1>Hobbies {toEdit && (
                            <span onClick={() => handleEditForms({ progress: 13, hobby })} className="px-1"><FaPencilAlt /></span>
                        )}</h1>
                        <span className="divider"></span>
                        {hobby && <div className="hobby grid-auto">
                            <HobbyCard name={'Entertainment'} hobby={hobby} icon={entertainment} />
                            <HobbyCard name={'Music'} hobby={hobby} icon={music} />
                            <HobbyCard name={'Sports'} hobby={hobby} icon={sports} />
                            <HobbyCard name={'Leisure'} hobby={hobby} icon={liesure} />
                            <HobbyCard name={'Adventure'} hobby={hobby} icon={adventure} />
                            <HobbyCard name={'travel'} hobby={hobby} icon={travel} />
                            <HobbyCard name={'books'} hobby={hobby} icon={book} />
                            <HobbyCard name={'Any other'} hobby={hobby} />

                        </div>}
                    </div>


                </div>
            }
        </>
    )
}
function HobbyCard({ name, icon, hobby }) {

    let hobbies = hobby[name.toLowerCase()]

    const arr = hobbies ? hobbies.split(',') : []
    return (

        arr.length > 0 &&

        <div className="hobby-card g-1">
            <img src={icon} alt="" />
            <div className="align-center d-flex justify-center">
                {arr.map(hobby => <h5 className='hobby-title'>{hobby},</h5>)}
            </div>

        </div>


    )
}