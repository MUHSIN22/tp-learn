import React, { useState } from 'react'
import './DragDropInput.css'
import { ReactComponent as Upload } from '../../Assests/icons/upload.svg';
import FormController from '../../Util Components/FormController/FormController';
export default function DragDropInput({file,setFile,multiple}) {

    const [progress, setProgress] = useState('input-inactive')
    
    const handleDragEnter = e => {
        e.preventDefault();
        setProgress('input-hover')
        e.stopPropagation();
      };
    
      const handleDragLeave = e => {
        e.preventDefault();
        if(!file) setProgress('input-inactive')
      };
    
      const handleDragOver = e => {
        e.preventDefault();
        setProgress('input-hover')
        e.stopPropagation();
      };
    
      const handleDrop = e => {
        e.preventDefault();
        setProgress('input-drop')
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            setFile(e.dataTransfer.files[0]);
          }
      };
    
      const handleInputChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
          if(e.target.files.length > 1) {
            setFile([...file,...e.target.files])
          }else{
            setFile(e.target.files[0]);
          }
        }
      };
      const handleClick =(e)=>{
          document.getElementById('fileInput').click()
      }
      console.log('file',file);
    
  return (
    <div
      className={`dragDropInput ${progress}`}
      onDrop={e => handleDrop(e)}
      onDragOver={e => handleDragOver(e)}
      onDragEnter={e => handleDragEnter(e)}
      onDragLeave={e => handleDragLeave(e)}
      onChange={handleInputChange}
      onClick = {handleClick}
    >
      <div className="sub-header">{!file&&<Upload></Upload>}{file?((typeof file === 'object' && file.length > 0) ? `${file.length} files uploaded` :  file.name || ((typeof file === "string" && file.length > 0) ? "File Uploaded" :'Drag & drop file here')):'Drag & drop file here'}</div>
      <div className="draggable-container">
        <input type="file" multiple={multiple} name="" id="fileInput" onChange={handleInputChange} style={{display:'none'}} />
      </div>
    </div>
  )
}
