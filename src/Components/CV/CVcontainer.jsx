import React from 'react'
import CognitiveSkills from '../Form/CognitiveSkills'
import MainCV from '../MainCv/MainCV'
import Cerification from './Cerification'
import './CvContainer.css'
import Docs from './Docs'
import Education from './Education'
import Hobby from './Hobby'
import Languages from './Languages'
import Portfolio from './Portfolio'
import Recommendation from './Recommendation'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import SelfDeclaration from './SelfDeclaration'
import SocialContribution from './SocialContribution'
import SocialMedia from './SocialMedia'
import Videos from './Videos'



export default function CVcontainer({ progress }) {
  return (
    <div className="cv-preview-container">
      <MainCV />
    </div>
    // <div className="cvcontainer">
    //   {<Section1 />}
    //   <Section2 />
    //   <Section3 />
    //   <Cerification />
    //   <Education />
    //   {false&&<Portfolio />}
    //   {/* <Recommendation /> */}
    //   <div className="flex-row-between">
    //     <Hobby />
    //     {/* <Languages /> */}
    //   </div>
    //   <SocialContribution/>
    //   <Docs/>
    //   <Videos/>
    //   <SocialMedia/>
    //   {/* <SelfDeclaration/> */}
    // </div>
  )
}
