import React from "react"
import ContentLoader from "react-content-loader"

const FileLoaderVeriticle = (props) => (
  <ContentLoader 
    speed={2}
    width={'100%'}
    height={150}
    viewBox="0 0 700 150"
    backgroundColor="#ededed"
    foregroundColor="#e0e0e0"
    {...props}
  >
    <rect x="1" y="8" rx="10" ry="10" width="67" height="62" /> 
    <rect x="87" y="41" rx="0" ry="0" width="83" height="6" /> 
    <rect x="4" y="88" rx="10" ry="10" width="67" height="62" /> 
    <rect x="90" y="96" rx="0" ry="0" width="152" height="10" /> 
    <rect x="90" y="121" rx="0" ry="0" width="83" height="6" /> 
    <rect x="86" y="14" rx="0" ry="0" width="152" height="10" />
  </ContentLoader>
)

export default MyLoader