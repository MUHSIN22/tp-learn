import React, { useCallback, useEffect, useState } from 'react'
import IconInput from '../IconInput/IconInput'
import MarkedSlider from '../MarkedSlider/MarkedSlider'
import { ReactComponent as AddCircle } from '../../Assests/icons/add-circle.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addCognitiveSkills,reload, selectResumeError, selectResumeInfo, selectResumeLoading } from '../../redux/Features/ResumeSlice';
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice';
import { searchSkills, selectSkillList } from '../../redux/Features/MasterSlice';
import Control from './Control';
import useDebounce from '../../DebouncedSearch';
// import SuggestiveInput from '../IconInput/SuggestiveInput';
import Alert from '../Alert/Alert';
// import MultiSelectedOptions from './MultiSelectedOptions';
import "../../App.css";
import { FiCheckSquare} from "react-icons/fi"

const DEBOUNCE_DELAY = 600;
export default function CognitiveSkills({}) {
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        communication:"",
        teamwork:"",
        leadership:"",
        flexibility_adaptability:"",
        problem_solving:"",
        handling_pressure:"",
        analytical_skills:"",
        creativity:"",
        time_management:"",
        negotiating:"",
        strategic_planning:"",
        handling_feedback:"",
        decision_making:"",
        presentation_skills:""
    })
    const [selected_options,set_Selected_options] = useState([]) 
    const error = useSelector(selectResumeError);
    const loading = useSelector(selectResumeLoading);
    const [showAlert, setShowAlert] = useState(false);
    const token = useSelector(selectAuthToken)
    const user_id = useSelector(selectUser_id)
    // const resumeInfo = useSelector(selectResumeInfo)
    // const skillList = useSelector(selectSkillList)
    // const [search, setSearch] = useState('')
    // const debouncedSearchState = useDebounce(search, DEBOUNCE_DELAY);

    const handleCognitiveSkills = (e)=>{
        e.preventDefault();
        let body = form
        body.user_id = user_id
        try {
          dispatch(addCognitiveSkills({auth:token,body:{...form,user_id}})).unwrap()
         console.log(form)
        } catch (error) {
            showAlert(true)
        }finally{
            setShowAlert(true)
        }
    }

    const handleComplexity = (evt) => {
        const value = evt.target.value;
        console.log(value,evt.target.name)
        setForm({
            ...form,
            [evt.target.name]: value
        });
        console.log(form)
    }
    // const handleSkill_desc = (e)=>{
    //     temp.skill_desc = e.target.value
    // }
    // const handleAddSkill = () => {
    //     console.log(temp)
    //     set_Selected_options([...selected_options,temp])
    //     document.getElementById('iconinput-Skills').value='';
    //     document.getElementById('iconinput-skill_complexity').value=0;
    //     document.getElementById('iconinput-skill_desc').value='';
    // }
 
    useEffect(()=>{
      
    },[showAlert,error])
    return (
        <>  
         <h1 className='text-left'>Now, tell us how do you rank to yourself in these Cognitive Skills?</h1>
        {showAlert&&!loading&&<Alert error={error} message={error?'Failed to add Project': 'Project added'}/>}
           
            <div className="card g-1" id="tpcv"> 
            <div className='responsive-grid'>
                <div>
                    <div className='mt-2'>
                        <MarkedSlider handleChange={handleComplexity} name={'communication'} state={form} setState={setForm} min={1} max={10} width={'85%'} label={<><span><FiCheckSquare style={{"fontSize":"1.3rem"}}/></span><span>  &nbsp; &nbsp;Communication </span></>}/>
                    </div>
                    <div className='mt-2'>
                        <MarkedSlider handleChange={handleComplexity} name={'teamwork'} state={form} setState={setForm} min={1} max={10} width={'85%'} label={<><span><strong><FiCheckSquare style={{"fontSize":"1.3rem"}}/></strong></span><span>  &nbsp; &nbsp;Teamwork </span></>} />
                    </div>
                    <div className='mt-2'>
                        <MarkedSlider handleChange={handleComplexity} name={'leadership'} state={form} setState={setForm} min={1} max={10} width={'85%'} label={<><span><strong><FiCheckSquare style={{"fontSize":"1.3rem"}}/></strong></span><span>  &nbsp; &nbsp;Leadership </span></>} />
                    </div>
                    <div className='mt-2'>
                        <MarkedSlider handleChange={handleComplexity} name={'flexibility_adaptability'} state={form} setState={setForm} min={1} max={10} width={'85%'} label={<><span><strong><FiCheckSquare style={{"fontSize":"1.3rem"}}/></strong></span><span>  &nbsp; &nbsp;Flexibility/adaptability </span></>} />
                    </div>
                    <div className='mt-2'>
                        <MarkedSlider handleChange={handleComplexity} name={'problem_solving'} state={form} setState={setForm} min={1} max={10} width={'85%'} label={<><span><strong><FiCheckSquare style={{"fontSize":"1.3rem"}}/></strong></span><span>  &nbsp; &nbsp;Problem-solving </span></>} />
                    </div>
                    <div className='mt-2'>
                        <MarkedSlider handleChange={handleComplexity} name={'handling_pressure'} state={form} setState={setForm} min={1} max={10} width={'85%'} label={<><span><strong><FiCheckSquare style={{"fontSize":"1.3rem"}}/></strong></span><span>  &nbsp; &nbsp;Handling pressure </span></>} />
                    </div>
                    <div className='mt-2'>
                        <MarkedSlider handleChange={handleComplexity} name={'analytical_skills'} state={form} setState={setForm} min={1} max={10} width={'85%'} label={<><span><strong><FiCheckSquare style={{"fontSize":"1.3rem"}}/></strong></span><span>  &nbsp; &nbsp;Analytical skills </span></>} />
                    </div>
                </div>
                <div>
                    <div className='mt-2'>
                        <MarkedSlider handleChange={handleComplexity} name={'creativity'} state={form} setState={setForm} min={1} max={10} width={'85%'} label={<><span><strong><FiCheckSquare style={{"fontSize":"1.3rem"}}/></strong></span><span>  &nbsp; &nbsp;Creativity </span></>} />
                    </div>
                    <div className='mt-2'>
                        <MarkedSlider handleChange={handleComplexity} name={'time_management'} state={form} setState={setForm} min={1} max={10} width={'85%'} label={<><span><strong><FiCheckSquare style={{"fontSize":"1.3rem"}}/></strong></span><span>  &nbsp; &nbsp;Time Management </span></>} />
                    </div>
                    <div className='mt-2'>
                        <MarkedSlider handleChange={handleComplexity} name={'negotiating'} state={form} setState={setForm} min={1} max={10} width={'85%'} label={<><span><strong><FiCheckSquare style={{"fontSize":"1.3rem"}}/></strong></span><span>  &nbsp; &nbsp;Negotiating </span></>} />
                    </div>
                    <div className='mt-2'>
                        <MarkedSlider handleChange={handleComplexity} name={'strategic_planning'} state={form} setState={setForm} min={1} max={10} width={'85%'} label={<><span><strong><FiCheckSquare style={{"fontSize":"1.3rem"}}/></strong></span><span>  &nbsp; &nbsp;Strategic Planning </span></>} />
                    </div>
                    <div className='mt-2'>
                        <MarkedSlider handleChange={handleComplexity} name={'handling_feedback'} state={form} setState={setForm} min={1} max={10} width={'85%'} label={<><span><strong><FiCheckSquare style={{"fontSize":"1.3rem"}}/></strong></span><span>  &nbsp; &nbsp;Handling Feedback </span></>} />
                    </div>
                    <div className='mt-2'>
                        <MarkedSlider handleChange={handleComplexity} name={'decision_making'} state={form} setState={setForm} min={1} max={10} width={'85%'} label={<><span><strong><FiCheckSquare style={{"fontSize":"1.3rem"}}/></strong></span><span>  &nbsp; &nbsp;Decision-making </span></>} />
                    </div>
                    <div className='mt-2'>
                        <MarkedSlider handleChange={handleComplexity} name={'presentation_skills'} state={form} setState={setForm} min={1} max={10} width={'85%'} label={<><span><strong><FiCheckSquare style={{"fontSize":"1.3rem"}}/></strong></span><span>  &nbsp; &nbsp;Presentation skills </span></>} />
                    </div>
                </div>
            </div>

            </div>
            <div className="flex-row-end">
                <button className="btn-fit btn-primary g-0-5" style={{"color":"white", "width":"2rem", font}} onClick={handleCognitiveSkills} > <AddCircle/></button>
            </div>
            {/* <Control handleSubmit={()=>{dispatch(reload()); handleCognitiveSkills}}/> */}
           
        </>
    )
}
