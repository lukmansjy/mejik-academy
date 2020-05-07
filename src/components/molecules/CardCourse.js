import React from 'react'
import {Col} from 'react-bootstrap'

const CardCourse  = ()=> {
    return(
        <Col xs="6" lg="2">
            <div className="cardCourse">
                <div className="cardCourseImg">
                    <img src={require('../../assets/images/expressJs.png')} alt="title course" />
                </div>
                <div className="cardCourseDetail">
                    <h6>Just Express (with a bunch of node and http). In detail.</h6>
                    <p>Lorem ipsum dolor sit amet, ...</p>
                </div>
            </div>
        </Col>
    )
}

export default CardCourse