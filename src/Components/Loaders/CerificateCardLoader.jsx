import React from "react"
import ContentLoader from "react-content-loader"

const CertificateCardLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={'100%'}
    height={112}
    viewBox="0 0 100% 112"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
     <rect x="119" y="14" rx="0" ry="0" width="172" height="16" /> 
    <rect x="120" y="77" rx="5" ry="5" width="59" height="25" /> 
    <rect x="120" y="45" rx="0" ry="0" width="60" height="12" /> 
    <rect x="185" y="78" rx="5" ry="5" width="59" height="25" /> 
    <rect x="252" y="77" rx="5" ry="5" width="59" height="25" /> 
    <rect x="5" y="11" rx="10" ry="10" width="100" height="94" /> 
    <rect x="343" y="10" rx="10" ry="10" width="100" height="94" />
  </ContentLoader>
)

export default CertificateCardLoader

