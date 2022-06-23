import React from "react"
import ContentLoader from "react-content-loader"

const FileLoaderHorizontal = (props) => (
    <ContentLoader
        speed={2}
        width={'100%'}
        height={84}
        viewBox="0 0 700 84"
        backgroundColor="#ededed"
        foregroundColor="#e0e0e0"
        {...props}
    >
        <rect x="1" y="8" rx="10" ry="10" width="67" height="62" />
        <rect x="87" y="16" rx="0" ry="0" width="108" height="10" />
        <rect x="87" y="41" rx="0" ry="0" width="83" height="6" />
        <rect x="252" y="8" rx="10" ry="10" width="67" height="62" />
        <rect x="338" y="16" rx="0" ry="0" width="108" height="10" />
        <rect x="338" y="41" rx="0" ry="0" width="83" height="6" />
    </ContentLoader>
)

export default FileLoaderHorizontal

