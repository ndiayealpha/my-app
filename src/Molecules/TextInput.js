import React from 'react'

const TextInputs = (props) => {
    return (
        <div className='input-form'>
            <div className='text-label'>
                <span className='label-input'>
                    {props.label}:
                </span>
                {props.label2 && <span  className='label-input-2'>{props.label2}</span>}
            </div>
            <input className='input' placeholder='teste placeholder' value={props.value} onChange={e => props.onchangeData(e.target.value)} />
        </div>
    )
}

export default TextInputs;