import React from 'react'
import ContentLoader from "react-content-loader"

const SocialContributionLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={'100%'}
    height={84}
    viewBox="0 0 100% 84"
    backgroundColor="#ededed"
    foregroundColor="#e0e0e0"
    {...props}
  >
    <rect x="20" y="8" rx="10" ry="10" width="78" height="72" /> 
    <rect x="116" y="9" rx="0" ry="0" width="139" height="12" /> 
    <rect x="118" y="49" rx="0" ry="0" width="293" height="8" /> 
    <rect x="118" y="65" rx="0" ry="0" width="267" height="8" />
  </ContentLoader>
)

export default SocialContributionLoader

