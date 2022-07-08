import React from "react"
import ContentLoader from "react-content-loader"

const ExperienceLoader = (props) => (
    <ContentLoader
        speed={2}
        width={"100%"}
        height={325}
        viewBox="0 0 700 325"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="30" cy="83" r="12" />
        <circle cx="30" cy="121" r="12" />
        <circle cx="30" cy="155" r="12" />
        <circle cx="30" cy="189" r="12" />
        <circle cx="30" cy="220" r="12" />
        <circle cx="30" cy="253" r="12" />
        <circle cx="30" cy="284" r="12" />
        <circle cx="30" cy="313" r="12" />
        <rect x="53" y="81" rx="0" ry="0" width="96" height="7" />
        <rect x="53" y="120" rx="0" ry="0" width="96" height="7" />
        <rect x="53" y="151" rx="0" ry="0" width="96" height="7" />
        <rect x="53" y="184" rx="0" ry="0" width="96" height="7" />
        <rect x="51" y="215" rx="0" ry="0" width="96" height="7" />
        <rect x="52" y="250" rx="0" ry="0" width="96" height="7" />
        <rect x="51" y="281" rx="0" ry="0" width="96" height="7" />
        <rect x="51" y="309" rx="0" ry="0" width="96" height="7" />
        <rect x="191" y="316" rx="0" ry="0" width="387" height="2" />
        <rect x="291" y="200" rx="0" ry="0" width="26" height="75" />
        <rect x="332" y="135" rx="0" ry="0" width="26" height="139" />
        <rect x="371" y="160" rx="0" ry="0" width="23" height="115" />
        <rect x="409" y="89" rx="0" ry="0" width="20" height="186" />
        <rect x="19" y="17" rx="0" ry="0" width="137" height="20" />
        <rect x="192" y="62" rx="0" ry="0" width="2" height="257" />
    </ContentLoader>
)

export default ExperienceLoader

