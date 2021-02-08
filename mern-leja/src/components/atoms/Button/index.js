import React from 'react'
import './button.scss'

const index = ({title,...rest}) => {
    return (
        <div>
            <button className="button" {...rest}>{title}</button>
        </div>
    )
}

export default index
