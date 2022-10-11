import React, { useEffect, useState } from 'react'
import EditFormTemplate from '../../Util Components/EditFormTemplate/EditFormTemplate'
import hobbiesIcon from '../../Assets/edit icons/hobbies.png'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addHobbies, getLanguageInfo, selectHobbies, selectResumeError, selectResumeLoading, selectResumeMessage, setReloadDecider, setResumeError } from '../../redux/Features/ResumeSlice'
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice'
import EditFormController from '../../Util Components/EditFormController/EditFormController'
import PlainInput from '../../Util Components/Inputs/PlainInput/PlainInput'
import { useNavigate } from 'react-router-dom'
import { getLanguageList, selectLanguages } from '../../redux/Features/MasterSlice'
import MultiSelectedOptions from '../EditForms/MultiSelectedOptions'
import SuggestionInput from '../../Util Components/Inputs/SuggestionInput/SuggestionInput'
import SelectInput from '../../Util Components/Inputs/SelectInput/SelectInput'

let temp = {
    language_id: '',
    language_name: '',
    language_comlexity: ''
}

export default function HobbiesEditorForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [selected_options, set_Selected_options] = useState([])
    const languageInfo = useSelector(getLanguageInfo);
    const [form, setForm] = useState({
        entertainment: '',
        music: '',
        sports: '',
        leisure: '',
        adventure: '',
        travel: '',
        books: '',
        any_other: ''
    })
    const expertiseList = ["Beginner","Intermediate","Advanced"]
    const error = useSelector(selectResumeError);
    const message = useSelector(selectResumeMessage);
    const loading = useSelector(selectResumeLoading);
    const [showAlert, setShowAlert] = useState(false);
    const token = useSelector(selectAuthToken)
    const user_id = useSelector(selectUser_id)
    const hobbies = useSelector(selectHobbies)
    const [search, setSearch] = useState('')
    const languages = useSelector(selectLanguages)
    const [languageList, setLanguageList] = useState('')

    function handleChange(evt) {
        const value = evt.target.value;
        setForm({
            ...form,
            [evt.target.name]: value
        });
    }

    function searchHandler(e) {
        if (e.nativeEvent.inputType === "insertText" || e.nativeEvent.inputType === 'deleteContentBackward') {
            setSearch(e.target.value)
        } else {
            let selected = languageList.filter((language) => language.language_name === e.target.value)[0]
            temp.language_id = selected?.id
            temp.language_name = selected.language_name
            setSearch(selected.language_name)
        }
    }

    const handleAddSkill = async () => {
        console.log(temp);
        temp.language_name = temp.language_id == '' ? search : temp.language_name;
        if (parseInt(temp.language_comlexity) > 100 || temp.language_comlexity < 0) {
            dispatch(setResumeError({ language_comlexity: ["Skill complexity should be a percentage between 0 to 100"] }))
            setShowAlert(true)
            document.getElementById('iconinput-Skills').value = '';
            // document.getElementById('iconinput-complexity').value = '';
            return true;
        }
        if ((temp.language_id !== "" || temp.language_name !== "") && temp.language_comlexity !== "") {
            set_Selected_options([...selected_options, temp])
            setSearch("")
            temp = {
                ...temp,
                language_id: '',
                language_name: '',
            }
        }
    }
    // const selectSkillHandler = (i) => {
    //     console.log(languages);
    //     temp.language_id = languages[i].id
    //     temp.language_name = languages[i].language_name
    //     console.log(temp);
    // }

    const handleComplexity = (e) => {
        temp.language_comlexity = e.target.value
    }

    const handleDeleteSkill = (i) => {
        const newList = selected_options.filter((x, index) => index !== i)
        set_Selected_options(newList)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let body = form
        body.user_id = user_id
        body.language_info = JSON.stringify(selected_options);
        body = JsonToFormData(body)

        console.log(body);
        try {
            dispatch(addHobbies({ auth: token, body: { ...form, user_id } })).unwrap()
        } catch (error) {
            showAlert(true)
        } finally {
            setShowAlert(true)
        }
    }

    useEffect(() => {
        if (hobbies) {
            console.log(hobbies, languageInfo, 'this is hobbies');
            setForm({ ...hobbies })
            set_Selected_options(languageInfo)
        }
    }, [hobbies, languageInfo])

    useEffect(() => {
        dispatch(getLanguageList()).unwrap()
    }, [])

    useEffect(() => {
        setLanguageList(languages)
    }, [languages])
    return (
        <EditFormTemplate title="Hobbies & Languages Known" icon={hobbiesIcon} >
            <div className="main-form-wrapper">
                <PlainInput value={form.entertainment} name='entertainment' handleChange={handleChange} label='Entertainment' placeholder='e.g. Period dramas, Nat Geo, BBC History, etc. ' />
                <PlainInput value={form.music} name='music' handleChange={handleChange} label='Music' placeholder='e.g. Indi Pop, Ed Sheeran, Prateek Kuhad, etc. ' />
                <PlainInput value={form.sports} name='sports' handleChange={handleChange} label='Sports' placeholder='e.g. Football, Cricket, Tennis, etc.' />
                <PlainInput value={form.leisure} name='leisure' handleChange={handleChange} label='Leisure' placeholder='e.g. Gardening, Beach walk, etc' />
                <PlainInput value={form.adventure} name='adventure' handleChange={handleChange} label='Adventure' placeholder='e.g. Hiking, Camping, River Rafting, etc.' />
                <PlainInput value={form.travel} name='travel' handleChange={handleChange} label='Travel' placeholder='e.g. places explored' />
                <PlainInput value={form.books} name='books' handleChange={handleChange} label='Books' placeholder='e.g. Ogilvy on Advertising, Copywriting Secrets, etc.' />
                <PlainInput value={form.any_other} name='any_other' handleChange={handleChange} label='Any other' placeholder='Other Hobbies' />

                <MultiSelectedOptions options={selected_options} value_field='language_name' subValue_field='language_comlexity' deleteHandler={handleDeleteSkill} />

                <div className="role-skills-container">
                    <div className="skill-and-complexity">
                        <SuggestionInput name='Skills' searchHandler={searchHandler} value={search} label='Please enter all the languages you know' placeholder='Search for languages' id="iconinput-Skills" suggestions={languageList} name_field={'language_name'} />
                        {/* <PlainInput name='complexity' handleChange={handleComplexity} label='Expertise level' placeholder='60%' type='number' id="iconinput-complexity" max={100} /> */}
                        <SelectInput name='complexity' handleChange={handleComplexity} options={expertiseList} label='Expertise level' id="iconinput-complexity"/>
                    </div>
                    <button className="btn-add" onClick={handleAddSkill} >Add Language</button>
                </div>

                <EditFormController handleSubmit={handleSubmit} isSkip={true} handlePreviousNavigation={() => navigate('/dashboard/edit')} />
            </div>
        </EditFormTemplate>
    )
}

const JsonToFormData = (json = {}) => {
    var form_data = new FormData();
    for (var key in json) {
        form_data.append(key, json[key]);
    }

    return form_data
}