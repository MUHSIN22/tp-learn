import React from "react"
import ContentLoader from "react-content-loader"

const ProjectLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={'100%'}
    height={500}
    viewBox="0 0 700 500"
    backgroundColor="#ededed"
    foregroundColor="#e0e0e0"
    {...props}
  >
    <rect x="13" y="27" rx="0" ry="0" width="115" height="15" /> 
    <rect x="9" y="122" rx="15" ry="15" width="118" height="35" /> 
    <rect x="170" y="133" rx="5" ry="5" width="130" height="10" /> 
    <rect x="375" y="133" rx="0" ry="0" width="100" height="6" /> 
    <rect x="373" y="149" rx="0" ry="0" width="174" height="6" /> 
    <rect x="375" y="163" rx="0" ry="0" width="154" height="6" /> 
    <rect x="7" y="183" rx="15" ry="15" width="118" height="35" /> 
    <rect x="171" y="192" rx="5" ry="5" width="130" height="10" /> 
    <rect x="179" y="67" rx="0" ry="0" width="67" height="9" /> 
    <rect x="15" y="67" rx="0" ry="0" width="67" height="9" /> 
    <rect x="378" y="193" rx="0" ry="0" width="100" height="6" /> 
    <rect x="376" y="209" rx="0" ry="0" width="174" height="6" /> 
    <rect x="378" y="223" rx="0" ry="0" width="154" height="6" />
  </ContentLoader>
)

export default ProjectLoader

