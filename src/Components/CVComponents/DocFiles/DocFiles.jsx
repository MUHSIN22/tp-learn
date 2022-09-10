import React from 'react'
import './DocFiles.css'
import contributionLabel from '../../../Assets/Dashboard icons/social.png'
import './DocFiles.css'
import { useSelector } from 'react-redux'
import { SelectDocuments } from '../../../redux/Features/ResumeSlice'

export default function DocFiles() {
    const docFiles = useSelector(SelectDocuments)
    return (
        <div className="cv-profile-container-primary">
            <h2 className="cv-profile-title-primary">Doc Files</h2>
            <div className="doc-grid">
                {
                    docFiles && docFiles[0] &&
                    docFiles.map((doc, index) => (
                        <div className="doc-file-wrapper" key={index} onClick={() => window.open(doc.file_path,"_blank")} >
                            <img src={contributionLabel} alt="" />
                            <div className="doc-details">
                                <h2 className="cv-profile-title-secondary">{doc.title}</h2>
                                <p className="other-details">{doc.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
