import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import FormController from '../../../Util Components/FormController/FormController'
import PlainInput from '../../../Util Components/Inputs/PlainInput/PlainInput'
import TextArea from '../../../Util Components/Inputs/TextArea/TextArea'
import MultiSelectedOptions from '../../../Util Components/MultiSelectedOptions'
import DragDropInput from '../../DragDropInput/DragDropInput'
import './PortfolioForm.css'

export default function PortfolioForm() {
    const [files, setFiles] = useState([])
    const [links,setLinks] = useState([])
    const [enteredLink,setEnteredLink] = useState()

    useEffect(() => {
        console.log(files,'this is files');
    },[files])

    const handleLinkChange = event => {
        console.log(event.target.value);
        setEnteredLink(event.target.value);
    }

    const handleAddLink = () => {
        if(isValidHttpUrl(enteredLink)){
            setLinks([...links,enteredLink])
            setEnteredLink('')
        }else{
            toast.error("Please enter a valid URL including http!")
        }
    }

    function isValidHttpUrl(string) {
        let url;
        
        try {
          url = new URL(string);
        } catch (_) {
          return false;  
        }
      
        return url.protocol === "http:" || url.protocol === "https:";
      }

    return (
        <div className="main-form-wrapper">
            <h2 className="form-title">Add your Portfolio</h2>
            <p className='form-subtitle'>You can add upto 5 projects</p>
            <PlainInput name='portfolio_title' label="Title" placeholder="My personal portfolio" />
            <TextArea name='portfolio_desc' label='Description' placeholder="My personal portfolio" />
            <MultiSelectedOptions options={files} value_field="name" />
            <div className="common-input-wrapper">
                <label htmlFor="">Share Documents (You can share multiple documents)</label>
                <DragDropInput multiple file={files} setFile={setFiles} />
            </div>
            <MultiSelectedOptions options={links} />
            <div className="portfolio-link-input">
                <PlainInput name='portfolio_link' value={enteredLink} label="Portfolio Link" placeholder='https://www.johndoe.me' handleChange={handleLinkChange} />
                <button className="btn btn-add" onClick={handleAddLink}>Add Link</button>
            </div>
            <FormController />
        </div>
    )
}
