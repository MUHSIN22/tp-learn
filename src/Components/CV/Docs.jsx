import React from 'react'
import { useSelector } from 'react-redux'
import PDFIcon from '../../Assests/PDF.png'
import { SelectDocuments } from '../../redux/Features/ResumeSlice'
import FileLoaderHorizontal from '../Loaders/FileLoaderHorizontal'
export default function Docs() {
    const documents = useSelector(SelectDocuments)
    return (
        <>
            {
                documents[0] &&
                <div className="docs section_2 col-100 align-center">
                    <div className="col-90">
                        <h1>Docs files </h1>
                        <span className="divider"></span>
                        {documents && documents.length > 0 ? <div className="flex-wrap g-1  ">
                            {
                                documents.map((doc, i) => <FileCard {...doc} icon={PDFIcon} />)
                            }
                        </div> : <FileLoaderHorizontal />}
                    </div>
                </div>
            }
        </>
    )
}
function FileCard({ file_url, title, icon, description }) {
    return (
        <a href={file_url} className="card flex-row-start g-1" download>

            <img src={icon} alt={title} />

            <div className="col-fit">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </a>
    )
}