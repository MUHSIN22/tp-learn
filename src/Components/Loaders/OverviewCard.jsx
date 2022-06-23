import React from "react"
import ContentLoader from "react-content-loader"

const OverviewCardLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
     <circle cx="72" cy="138" r="52" /> 
    <rect x="23" y="66" rx="2" ry="2" width="94" height="8" /> 
    <rect x="156" y="66" rx="2" ry="2" width="94" height="8" /> 
    <rect x="294" y="67" rx="2" ry="2" width="94" height="8" /> 
    <rect x="23" y="218" rx="2" ry="2" width="78" height="8" /> 
    <circle cx="114" cy="222" r="4" /> 
    <rect x="22" y="242" rx="2" ry="2" width="78" height="8" /> 
    <circle cx="114" cy="246" r="4" /> 
    <rect x="24" y="263" rx="2" ry="2" width="78" height="8" /> 
    <circle cx="114" cy="266" r="4" /> 
    <circle cx="175" cy="113" r="23" /> 
    <circle cx="231" cy="113" r="23" /> 
    <circle cx="175" cy="174" r="23" /> 
    <circle cx="233" cy="175" r="23" /> 
    <circle cx="177" cy="239" r="23" /> 
    <rect x="297" y="96" rx="2" ry="2" width="78" height="6" /> 
    <rect x="298" y="116" rx="2" ry="2" width="78" height="6" /> 
    <rect x="299" y="135" rx="2" ry="2" width="78" height="6" /> 
    <rect x="298" y="153" rx="2" ry="2" width="78" height="6" />
  </ContentLoader>
)

export default OverviewCardLoader

