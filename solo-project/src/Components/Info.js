import React from 'react';
import soloimage from  "../images/model.jpg"
import email from  "../images/email.png"
import linkedin from  "../images/linkedin.png"

export default function Info() {
    return (
        <div className='info'>
            <img src={soloimage} className="info--image" />
            <h1 className='info--name'>Shah Rezza</h1>
            <h3 className='info--jobposition'>Software Engineer</h3>
            <h4 className='info--website'>shahrezza.com.my</h4>
            <div className="info--button--group">
                <button className='button--email'><img className='emailicon' src={email} width="16px" /><span>Email</span></button>
                <button className='button--linkedin'><img className='linkedinicon' src={linkedin} width="16px" /><span>LinkedIn</span></button>
            </div>
        </div>
    );
}
