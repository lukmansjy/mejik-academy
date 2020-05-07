import React from 'react'

const NavBar  = ()=> {
    return(
        <div className="navWrapper">
            <div>
                <img src={require('../../assets/icons/logo_nav.png')} alt="logo" className="logoNav"/>
                <span className="searchWrapper">
                    <input type="text" className="inputSearch" placeholder="Search course here ...."/>
                    <img src={require('../../assets/icons/search.png')} alt="Search" className="iconSearch"/>
                </span>
            </div>

            <div  className="navRight">
                <a href="#" className="myCourse">My Course</a>
                <a href="" className="switchInstructor">Switch to Instructor View</a>
                <span className="navUserPic">
                    <img src={require('../../assets/icons/user.png')} alt="User"/>
                </span>
            </div>
        </div>
    )
}

export default NavBar