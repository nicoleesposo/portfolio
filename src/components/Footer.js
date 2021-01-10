import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Fb from '../assets/images/facebook.svg'
import Github from '../assets/images/github.svg'
import LinkedIn from '../assets/images/linkedin.svg'

const Footer = () => {
    return(
        <>
            <footer id="contact">
                <Container fluid="lg">
                    <Row>
                        <Col xl={{ span: 12, offset: 0 }} lg={{ span: 10, offset: 1 }} md={{ span: 12, offset: 0 }} sm={{ span: 12, offset: 0 }} xs={{span: 12, offset: 0 }}>
                            <h2>Say <br />hello.</h2>
                            <Row className="inner">
                                <Col xl={{ span: 6, offset: 2 }} lg={{ span: 6, offset: 2 }} md={{ span: 6, offset: 0 }} sm={{ span: 12, offset: 0 }} xs={{span: 12, offset: 0 }} className="email">
                                    <h3>Let's collaborate</h3>
                                    <p>If you're interested in discussing a project or just want to say hello, contact me.</p>
                                    <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=nicoleesposo.web@gmail.com" target="_blank" className="link">nicoleesposo.web@gmail.com</a>
                                </Col>
                                <Col xl={ 4 } lg={ 4 }  md={ 6 } sm={ 12 } xs={ 12 }>
                                    <div className="phone">
                                        <h5>Phone</h5>
                                        <p>+639955567558</p>
                                    </div>
                                    <div className="address">
                                        <h5>Address</h5>
                                        <p>Central Signal Village, Taguig
                                        Metro Manila, Philippines</p>
                                    </div>
                                    <div className="address">
                                        <h5>Socials</h5>
                                        <a href="https://www.facebook.com/nicoleesposo01">
                                            <img src={ Fb } alt="Facebook" />
                                        </a>
                                        <a href="https://github.com/nicoleesposo">
                                            <img src={ Github } alt="Github" />
                                        </a>
                                        <a href="https://www.linkedin.com/in/nicole-esposo-04a86a1b4">
                                            <img src={ LinkedIn } alt="LinkedIn" />
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="subfooter">
                    <Row>
                        <Col xl={ 4 } md={ 4 } sm={ 12 }></Col>
                        <Col xl={ 4 } md={ 4 } sm={ 12 } className="copyright">
                            <p>Nicole Esposo © 2020</p>
                            </Col>
                        <Col xl={ 4 } md={ 4 } sm={ 12 } className="update">
                            <p>Last Updated January 2021</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer