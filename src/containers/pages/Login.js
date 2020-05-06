import React from 'react'
import Logo from '../../components/atoms/Logo'
import FormLogin from '../../components/molecules/FormLogin'

const Login = ()=>{
    return(
        <div className="loginPage">
            <Logo/>
            <FormLogin/>
        </div>
    )
}

export default Login