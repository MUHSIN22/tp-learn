import React from "react"
import ContentLoader from "react-content-loader"

const RecommendationLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={'100%'}
    height={112}
    viewBox="0 0 100% 112"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="122" y="15" rx="0" ry="0" width="172" height="14" /> 
    <rect x="5" y="11" rx="100" ry="100" width="100" height="94" /> 
    <rect x="122" y="47" rx="0" ry="0" width="77" height="7" /> 
    <rect x="121" y="64" rx="0" ry="0" width="104" height="7" /> 
    <rect x="121" y="82" rx="0" ry="0" width="77" height="7" />
  </ContentLoader>
)

export default RecommendationLoader

