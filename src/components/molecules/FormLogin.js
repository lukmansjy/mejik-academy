import React from 'react'

const FormLogin  = ()=> {
    return(
        <div className="loginWrapper">

            <div className="loginHeader">
                <h1>Login</h1>
                <p>Login and start managing your learning process!</p>
            </div>

            <form className="formLogin">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="e.g. lukman.rocks@live.com" id="email"/>
                <label htmlFor="password">Password</label>
                <div className="wrapperInputPassword">
                    <input type="password" placeholder="Input your password" id="password"/>
                    <button className="showPassword">
                        <img src={require('../../assets/icons/eye.png')} alt="Show Password"/>
                    </button>
                </div>
                
                <div className="spaceBetween">
                    <div>
                        <input type="checkbox" id="remember"/>
                        <label htmlFor="remember">Keep me signed in</label>
                    </div>
                    <a href="#" className="forgetPassword">Forgotten your password?</a>
                </div>

                <button className="btnLogin">Login</button>
                <div className="center">
                    <p href="#" className="labelRagister">
                        Don't you have an account yet? 
                        <a href="#">Register here</a>
                    </p>
                </div>
            </form>
            
        </div>
    )
}

export default FormLogin