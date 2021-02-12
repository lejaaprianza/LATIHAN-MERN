import React from 'react'
import { ICDiscord, ICFacebook, LogoLeja } from '../../../assets'
import './footer.scss'

const ICon = ({img})=>{
    return(
        <div className="icon-wrapper">
            <img className="icon-medsos" src={img} alt="icon"/>
        </div>
    )
}

const Footer = () => {
    return (
        <div>

        <div className="footer">
            <div>
                <img src={LogoLeja} alt="logo" className="logo"/>
            </div>
            <div className="social-wrapper">
                <ICon img={ICFacebook}/>
                <ICon img={ICDiscord}/>
            </div>
        </div>
        <div className="copyright">
            <p>Copyright</p>
        </div>
        </div>
    )
}

export default Footer
