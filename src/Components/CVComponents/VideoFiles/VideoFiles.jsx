import React from 'react'
import { useSelector } from 'react-redux'
import { selectVideo } from '../../../redux/Features/ResumeSlice'
import VideoIcon from "../../../Assests/play-circle.png";

export default function VideoFiles() {
    const videoFiles = useSelector(selectVideo)
    return (
        <div className="cv-profile-container-primary">
            <h2 className="cv-profile-title-primary">Video Files</h2>
            <div className="doc-grid">
                {
                    videoFiles &&
                    <div className="doc-file-wrapper" onClick={() => window.open(videoFiles, "_blank")} >
                        <img src={VideoIcon} alt="" />
                        <div className="doc-details">
                            <h2 className="cv-profile-title-secondary">Video File</h2>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
