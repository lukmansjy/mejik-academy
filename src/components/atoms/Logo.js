import React from 'react'

const Logo  = ()=> {
    return(
        <div className="logoWrapper">
            <img src={require('../../assets/icons/logo.png')} className="logoBrand" alt="brand"/>
        </div>
    )
}

export default Logo