import React, { forwardRef } from 'react'
import './../App.css'

function Works(ref) {
    return (
        <div className='works-container'>
            <h1 ref={ref}>React Project</h1>
        </div>
    )
}

export default forwardRef(Works);
