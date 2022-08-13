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
    const [inputStatus,setInputStatus] = useState({
        communication: false,
        teamwork: false,
        leadership: false,
        flexibility_adaptability: false,
        problem_solving: false,
        handling_pressure: false,
        analytical_skills: false,
        creativity: false,
        time_management: false,
        negotiating: false,
        strategic_planning: false,
        handling_feedback: false,
        decision_making: false,
        presentation_skills: false
    })
    const [selected_options,set_Selected_options] = useState([]);
    const error = useSelector(selectResumeError);
    const loading = useSelector(selectResumeLoading);
    const [showAlert, setShowAlert] = useState(false);
    const token = useSelector(selectAuthToken)
    const user_id = useSelector(selectUser_id)
    // const resumeInfo = useSelector(selectResumeInfo)
    // const skillList = useSelector(selectSkillList)
    // const [search, setSearch] = useState('')
    // const debouncedSearchState = useDebounce(search, DEBOUNCE_DELAY);

    const checkEnabled = (key) => {
        let enabledCount = 0;
        Object.values(inputStatus).forEach((item) => {
            if(item) enabledCount++;
        })
        if(enabledCount < 6 || inputStatus[key] === true){
            return false;
        }
        return true;
    }

    const handleCognitiveSkills = (e)=>{
        e.preventDefault();
        let body = form
        body.user_id = user_id
        console.log(body);
        try {
          dispatch(addCognitiveSkills({auth:token,body:{...form,user_id}})).unwrap()
          dispatch(reload())
         console.log(form)
        } catch (error) {
            showAlert(true)
        }finally{
            setShowAlert(true)
        }
    }

    const handleComplexity = (evt) => {
        const value = evt.target.value;
        setForm({
            ...form,
            [evt.target.name]: value
        });
        if(!selected_options.includes(evt.target.name)){
            set_Selected_options([...selected_options,evt.target.name])
        }
    }

    const handleEnabling = (event) => {
        let currentElem = event.target;
        setInputStatus({...inputStatus, [currentElem.name]: currentElem.checked});
        if(!currentElem.checked){
            setForm({...form,[currentElem.name]: ""});
        }

    }
    console.log("ppppppppppppppppp",selected_options.length)
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
         <p>Select your any 6 top skills</p>
        {showAlert&&!loading&&<Alert error={error} message={error?'Failed to add Project': 'Project added'}/>}
           
            <div className="card g-1" id="tpcv"> 
            <div className='responsive-grid cognetive-grid'>
                <div>
                    <div className='mt-2'>
                        <MarkedSlider disabled={checkEnabled('communication')} handleChange={handleComplexity} handleEnabling={handleEnabling} name={'communication'} state={form} setState={setForm} min={1} max={10} width={'85%'} label={<><span>  &nbsp; &nbsp;Communication </span></>}/>
                    </div>
                    <div className='mt-2'>
                        {/* selected_options.length>=6 && form["teamwork"]==""?checkEnabled(''):false */}
                        <MarkedSlider disabled={checkEnabled('teamwork')} handleChange={handleComplexity} handleEnabling={handleEnabling} name={'teamwork'} state={form} setState={setForm} min={1} max={10} width={'85%'} label={<><span>  &nbsp; &nbsp;Teamwork </span></>} />
                    </div>
                    <div className='mt-2'>
                        <MarkedSlider disabled={checkEnabled('leadership')} handleChange={handleComplexity} handleEnabling={handleEnabling} name={'leadership'} state={form} setState={setForm} min={1} max={10} width={'85%'} label={<><span>  &nbsp; &nbsp;Leadership </span></>} />
                    </div>
                    <div className='mt-2'>
                        <MarkedSlider disabled={checkEnabled('flexibility_adaptability')} handleChange={handleComplexity} handleEnabling={handleEnabling} name={'flexibility_adaptability'} state={form} setState={setForm} min={1} max={10} width={'85%'} label={<><span>  &nbsp; &nbsp;Flexibility/adaptability </span></>} />
                    </div>
                    <div className='mt-2'>
                        <MarkedSlider disabled={checkEnabled('problem_solving')} handleChange={handleComplexity} handleEnabling={handleEnabling} name={'problem_solving'} state={form} setState={setForm} min={1} max={10} width={'85%'} label={<><span>  &nbsp; &nbsp;Problem-solving </span></>} />
                    </div>
                    <div className='mt-2'>
                        <MarkedSlider disabled={checkEnabled('handling_pressure')} handleChange={handleComplexity} handleEnabling={handleEnabling} name={'handling_pressure'} state={form} setState={setForm} min={1} max={10} width={'85%'} label={<><span>  &nbsp; &nbsp;Handling pressure </span></>} />
                    </div>
                    <div className='mt-2'>
                        <MarkedSlider disabled={checkEnabled('analytical_skills')} handleChange={handleComplexity} handleEnabling={handleEnabling} name={'analytical_skills'} state={form} setState={setForm} min={1} max={10} width={'85%'} label={<><span>  &nbsp; &nbsp;Analytical skills </span></>} />
                    </div>
                </div>
                <div>
                    <div className='mt-2'>
                        <MarkedSlider disabled={checkEnabled('creativity')} handleChange={handleComplexity} handleEnabling={handleEnabling} name={'creativity'} state={form} setState={setForm} min={1} max={10} width={'85%'} label={<><span>  &nbsp; &nbsp;Creativity </span></>} />
                    </div>
                    <div className='mt-2'>
                        <MarkedSlider disabled={checkEnabled('time_management')} handleChange={handleComplexity} handleEnabling={handleEnabling} name={'time_management'} state={form} setState={setForm} min={1} max={10} width={'85%'} label={<><span>  &nbsp; &nbsp;Time Management </span></>} />
                    </div>
                    <div className='mt-2'>
                        <MarkedSlider disabled={checkEnabled('negotiating')} handleChange={handleComplexity} handleEnabling={handleEnabling} name={'negotiating'} state={form} setState={setForm} min={1} max={10} width={'85%'} label={<><span>  &nbsp; &nbsp;Negotiating </span></>} />
                    </div>
                    <div className='mt-2'>
                        <MarkedSlider disabled={checkEnabled('strategic_planning')} handleChange={handleComplexity} handleEnabling={handleEnabling} name={'strategic_planning'} state={form} setState={setForm} min={1} max={10} width={'85%'} label={<><span>  &nbsp; &nbsp;Strategic Planning </span></>} />
                    </div>
                    <div className='mt-2'>
                        <MarkedSlider disabled={checkEnabled('handling_feedback')} handleChange={handleComplexity} handleEnabling={handleEnabling} name={'handling_feedback'} state={form} setState={setForm} min={1} max={10} width={'85%'} label={<><span>  &nbsp; &nbsp;Handling Feedback </span></>} />
                    </div>
                    <div className='mt-2'>
                        <MarkedSlider disabled={checkEnabled('decision_making')} handleChange={handleComplexity} handleEnabling={handleEnabling} name={'decision_making'} state={form} setState={setForm} min={1} max={10} width={'85%'} label={<><span>  &nbsp; &nbsp;Decision-making </span></>} />
                    </div>
                    <div className='mt-2'>
                        <MarkedSlider disabled={checkEnabled('presentation_skills')} handleChange={handleComplexity} handleEnabling={handleEnabling} name={'presentation_skills'} state={form} setState={setForm} min={1} max={10} width={'85%'} label={<><span>  &nbsp; &nbsp;Presentation skills </span></>} />
                    </div>
                </div>
            </div>

            </div>
            {/* <div className="flex-row-end">
                <button className="btn-fit btn-primary g-0-5" style={{"color":"white", "width":"2rem"}} onClick={handleCognitiveSkills} > <AddCircle/></button>
            </div> */}
            <Control handleSubmit={handleCognitiveSkills}/>
        </>
    )
}
