import React from 'react'
import pdfFile from '../../Assets/ABOUT US PAGE TALENTPLACE.pdf'

export default function AboutUs() {
  return (
    <div className="about-pdf-container">
        <object data={pdfFile} type="application/pdf" style={{width: "100%",minHeight: "100vh"}}>
            This file can't open in your browser
        </object>
    </div>
  )
}
