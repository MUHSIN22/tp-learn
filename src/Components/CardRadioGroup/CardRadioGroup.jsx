import React, { useEffect, useState } from 'react'
import './CardRadioGroup.css'
export default function CardRadioGroup({ name, state, setState, option, name_field, label, defaultValue, default_value = null, disabled, autofill }) {
    const [current, setCurrent] = useState('');
    const [list,setList] = useState(option)
    const clickHandler = (index) => {
        if (!disabled) {
            let temp = state;
            temp[name] = list[index].id;
            setState(temp)
            setCurrent(index)
        }

    }
    useEffect(() => {
        if (autofill) {
            console.log('ksdjfsadl',state[name])
            let i = option.findIndex((element) => element.id == state[name])
            console.log(i);
            setCurrent(i)
        }

        return () => {

        }
    }, [default_value, state])

    useEffect(() => {
        // setList(option.sort((item1,item2) => item1.id - item2.id))
        let i = list.findIndex(element => {
            console.log(element,element.id,state[name],state);
            return element.id === state[name]
        })
        console.log(i);
        setCurrent(i)
    },[])

    useEffect(() => {
        setList(option)
    },[option])
    return (
        <div className='col-100 g-1 align-start'>
            <label>{label}</label>
            <div className="card-radio-group">
                {list.map((option, i) => {
                    return <RadioCard key={i} index={i} clickHandler={clickHandler} label={option[name_field]} status={ current === i ? 'active' : 'inactive'} />
                })
                }
            </div>
        </div>

    )
}
function RadioCard({ index, status, clickHandler, label }) {

    return (
        <div className={`radio-card ${status}`} onClick={() => clickHandler(index)}>
            <div className="radio-btn" >
                <div className="dot"></div>
            </div>
            <label>{label}</label>
        </div>)
}