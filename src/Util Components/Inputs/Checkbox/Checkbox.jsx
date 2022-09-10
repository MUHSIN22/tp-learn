import React from 'react'

export default function Checkbox({value,onChange,checked,label}) {
  return (
    <label className="control control-checkbox">
      {label}
      <input name='current_working' value={value} onChange={onChange} type="checkbox" checked={checked} />
      <div className="control_indicator"></div>
    </label>
  )
}
