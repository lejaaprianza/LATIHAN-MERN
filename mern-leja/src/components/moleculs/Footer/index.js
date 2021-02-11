import React from 'react'
import { ICDiscord, ICFacebook, LogoLeja } from '../../../assets'

const Footer = () => {
    return (
        <div>

        <div>
            <div>
                <img src={LogoLeja} />
            </div>
            <div>
                <img src={ICFacebook} alt ="facebook"/>
                <img src={ICDiscord} alt ="facebook"/>
            </div>
        </div>
        <div>
            <p>Copyright</p>
        </div>
        </div>
    )
}

export default Footer
