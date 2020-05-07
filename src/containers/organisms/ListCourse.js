import React from 'react'
import {Container, Row} from 'react-bootstrap'

import CardCourse from '../../components/molecules/CardCourse'

const ListCourse  = ()=> {
    return(
        <div className="wrepperContent">

                <Container fluid>
                    <Row>
                        <CardCourse/>
                        <CardCourse/>
                        <CardCourse/>
                        <CardCourse/>
                        <CardCourse/>
                        <CardCourse/>
                        <CardCourse/>
                        <CardCourse/>
                        <CardCourse/>
                    </Row>
                </Container>
        

            </div>
    )
}

export default ListCourse