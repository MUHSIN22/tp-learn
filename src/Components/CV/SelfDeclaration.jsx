import React from 'react'

export default function SelfDeclaration({setChecked}) {
  return (
    <div className="declaration  section_2 col-100 align-center text-left" style={{paddingTop: 0, marginTop: 0}}>
    <div className="col-100">
        <h3>Self-declaration</h3>
        <span className="divider"></span>
        <div className="col-100 g-1">
        <p>I hereby declare that the above particulars of facts and information stated are true, correct and complete to the best of my belief and knowledge.</p>
        <div className="flex-row-start">
        <label className="control control-checkbox">
        I agree terms and condition
          <input type="checkbox" onChange={event => setChecked(event.target.checked)}/>
          <div className="control_indicator"></div>
        </label>
      </div>
        </div>

     </div>
</div>            
  )
}
