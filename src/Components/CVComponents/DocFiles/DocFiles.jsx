import React from 'react'
import './DocFiles.css'
import contributionLabel from '../../../Assets/Dashboard icons/social.png'
import { useSelector } from 'react-redux'
import { SelectDocuments } from '../../../redux/Features/ResumeSlice'

export default function DocFiles() {
    const docFiles = useSelector(SelectDocuments)
    console.log(docFiles, 'this is doc files');
    return (
        <div className="cv-profile-container-primary">
            <h2 className="cv-profile-title-primary">Portfolio</h2>
            <div className="doc-grid">
                {
                    docFiles && docFiles[0] &&
                    docFiles.map((doc, index) => (
                        <div className="doc-file-wrapper" key={index} >
                            <img src={contributionLabel} className="contribution-label" alt="" />
                            <div className="doc-details">
                                <h2 className="cv-profile-title-secondary">{doc.title}</h2>
                                <p className="other-details">{doc.description}</p>
                                {
                                    (doc.file_info && doc.file_info[0]) &&
                                    <div className="files-or-links">
                                        <strong>Files:</strong>
                                        {
                                            doc.file_info.map((file, fileIndex) => (
                                                <a href={file.fileName} target="_blank" className='doc-file-link' key={fileIndex}>{`File-${fileIndex+1}`}{(fileIndex < (doc.file_info.length - 1))?',':""}</a>
                                            ))
                                        }
                                    </div>
                                }
                                {
                                    (doc.links && doc.links !== "") &&
                                    <div className="files-or-links">
                                        <strong>Links:</strong>
                                        {
                                            doc.links.split(',').map((link, linkIndex) => (
                                                <a href={link} target="_blank" className='doc-file-link' key={linkIndex}>{link}{(linkIndex < (doc.links.split(',').length - 1))?',':""}</a>
                                            ))
                                        }
                                    </div>
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
