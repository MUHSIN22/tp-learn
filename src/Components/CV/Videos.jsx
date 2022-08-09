import React from 'react'
import { useSelector } from 'react-redux'
import VideoIcon from '../../Assests/play-circle.png'
import { selectVideo } from '../../redux/Features/ResumeSlice'
import FileLoaderHorizontal from '../Loaders/FileLoaderHorizontal'
export default function Videos() {
    const video = useSelector(selectVideo)
    return (
        <>
            {
                video &&
                <div className="docs section_2 col-100 align-center">
                    <div className="col-90">
                        <h3>Video files </h3>
                        <span className="divider"></span>
                        {video && video.length > 0 ? <div className="flex-wrap g-1  ">
                            <FileCard url={video} filename={'Talent Place - CV Builder.Mp4'} icon={VideoIcon} />

                        </div> : <FileLoaderHorizontal />}
                    </div>
                </div>
            }
        </>
    )
}
function FileCard({ url, filename, icon }) {
    return (
        <a href={url} className="card flex-row-start g-1" download>

            <img src={icon} alt={filename} />

            <div className="col-fit">
                <h4>{filename}</h4>
                <p>Integrate with Talent Place</p>
            </div>
        </a>
    )
}