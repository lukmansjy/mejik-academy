import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/App.css'
import Login from './containers/pages/Login'
import Home from './containers/pages/Home'
import Course from './containers/pages/Course'

const App = ()=>{
    return(
        <div>
            {/* <Login/> */}
            {/* <Home/> */}
            <Course/>
        </div>
    )
}

export default App