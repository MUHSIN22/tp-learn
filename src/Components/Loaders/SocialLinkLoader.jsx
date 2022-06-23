import React from "react"
import ContentLoader from "react-content-loader"

const SocialLinkLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={'100%'}
    height={82}
    viewBox="0 0 700 82"
    backgroundColor="#ededed"
    foregroundColor="#e0e0e0"
    {...props}
  >
    <rect x="1" y="8" rx="100" ry="100" width="50" height="50" /> 
    <rect x="4" y="88" rx="10" ry="10" width="67" height="62" /> 
    <rect x="90" y="96" rx="0" ry="0" width="152" height="10" /> 
    <rect x="90" y="121" rx="0" ry="0" width="83" height="6" /> 
    <rect x="62" y="28" rx="0" ry="0" width="115" height="10" /> 
    <rect x="235" y="8" rx="100" ry="100" width="50" height="50" /> 
    <rect x="296" y="28" rx="0" ry="0" width="115" height="10" />
  </ContentLoader>
)

export default SocialLinkLoader

