import React from 'react'
import { useSelector } from 'react-redux'
import ProgressBar from '../../../Util Components/ProgressBar/ProgressBar'
import { getLanguageInfo } from '../../../redux/Features/ResumeSlice'

let colors = ["#f2005c", "#00d3ac", "#01b550", "#00fefe", "#72b0fe", "#2c52ff"]

export default function LanguageSection() {
  const languageInfo = useSelector(getLanguageInfo)
  return (
    <div className="cv-profile-container-primary">
      <h2 className="cv-profile-title-primary">Languages Known</h2>
      <div className="languages-grid">
        {
          (languageInfo && languageInfo[0]) &&
          languageInfo.map((language, index) => (
            <div className="language" key={index}>
              <h3>{language.language_name}</h3>
              <ProgressBar percent={
                  language.language_comlexity === "Beginner" ? 33.3
                  : language.language_comlexity === "Intermediate" ?  66.6
                  : language.language_comlexity === "Advanced"? 100
                  : 100
                } color={index > 6 ? colors[index % 6] : colors[index]} isHideValue />
            </div>
          ))
        }
      </div>
    </div>
  )
}
