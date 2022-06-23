import React from "react"
import ContentLoader from "react-content-loader"

const BioLoader = (props) => (
    <ContentLoader
        speed={2}
        width={300}
        height={89}
        viewBox="0 0 300 89"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="25" y="20" rx="5" ry="5" width="290" height="7" />
        <rect x="25" y="40" rx="5" ry="5" width="290" height="7" />
        <rect x="25" y="60" rx="5" ry="5" width="290" height="7" />
        <rect x="25" y="80" rx="5" ry="5" width="229" height="7" />
    </ContentLoader>
)

export default BioLoader

