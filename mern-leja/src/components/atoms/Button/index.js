import React from 'react'
import './button.scss'

const index = ({title,...rest}) => {
    return (
            <button className="button" {...rest}>{title}</button>
    )
}

export default index
