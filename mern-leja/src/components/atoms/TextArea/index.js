import React from 'react'
import './textArea.scss'
const index = ({...rest}) => {
    return (
        <div>
            <textarea className="text-area" {...rest}>

            </textarea>
        </div>
    )
}

export default index
