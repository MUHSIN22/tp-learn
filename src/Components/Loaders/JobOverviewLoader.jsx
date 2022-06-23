import React from "react"
import ContentLoader from "react-content-loader"

const JobOverviewLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={'100%'}
    height={208}
    viewBox="0 0 100% 219"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="6" y="17" rx="0" ry="0" width="172" height="14" /> 
    <rect x="4" y="47" rx="0" ry="0" width="77" height="7" /> 
    <rect x="46" y="84" rx="0" ry="0" width="77" height="7" /> 
    <rect x="45" y="121" rx="0" ry="0" width="77" height="7" /> 
    <rect x="45" y="157" rx="0" ry="0" width="77" height="7" /> 
    <rect x="45" y="192" rx="0" ry="0" width="77" height="7" /> 
    <rect x="8" y="77" rx="4" ry="4" width="22" height="22" /> 
    <rect x="8" y="113" rx="4" ry="4" width="22" height="22" /> 
    <rect x="7" y="149" rx="4" ry="4" width="22" height="22" /> 
    <rect x="7" y="185" rx="4" ry="4" width="22" height="22" /> 
    <rect x="168" y="79" rx="17" ry="17" width="315" height="124" /> 
    <rect x="266" y="162" rx="0" ry="0" width="1" height="1" />
  </ContentLoader>
)

export default JobOverviewLoader

