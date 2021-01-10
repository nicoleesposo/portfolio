import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const About = () => {
    return(
        <>
            <div className="about" id="about">
                <Container fluid="lg">
                    <Row>
                        <Col xl={{ span: 6, offset: 0 }} lg={{ span: 4, offset: 1 }} md={{ span: 6, offset: 0 }} sm={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }} className="col-lg-6 name">
                            <div>
                                <h4>Hello, I'm</h4>
                                <h3>Nicole Joy Esposo</h3>
                            </div>
                        </Col>
                        <Col xl={{ span: 6, offset: 0 }} lg={{ span: 4, offset: 0 }} md={{ span: 6, offset: 0 }} sm={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }}>
                            <p>I am a web developer with over 2 years of experience. I have a BS in Aviation Information Technology at the Philippine State College of Aeronautics - VAB. I am currently working with ReactJS and love how it makes building and updating complex interfaces so much easier.</p>
                            <p>I'm looking for a new opportunity to further my career in web development or front-end development at a start-up company that is looking for someone who is passionate about their work.</p>
                            <a href="#contact" className="link">Contact Me</a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default About