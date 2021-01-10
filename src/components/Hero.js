import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ScrollDown from '../assets/images/scroll.svg'
import ArrowDown from '../assets/images/arrow.svg'

const Hero = () => {
    return(
        <>
            <div className="hero" id="top">
                <Container fluid="lg">
                    <Row>
                        <Col xl={{ span: 6, offset: 0, order: 1 }} lg={{ span: 6, offset: 1, order: 1 }} md={{ span: 6, offset: 0, order: 1 }} sm={{ span: 12, order: 2 }} xs={{ span: 12, order: 2 }}>
                            <div className="img-bg"></div>
                        </Col>
                        <Col xl={{ span: 6, offset: 0, order: 2 }} lg={{ span: 4, offset: 0, order: 2 }} md={{ span: 6, offset: 0, order: 2 }} sm={{ span: 12, order: 1 }} xs={{ span: 12, order: 1 }} className="content">
                            <div className="hero-info">
                                <h1>Nicole Joy Esposo / Web Developer</h1>
                                <h2>I create <span>next level, stunning</span> websites</h2>
                                <p>I am a web developer based in Taguig, Philippines. I have been developing websites since 2018 and is currently developing in HTML, CSS, Bootstrap, ReactJS and more.</p>

                                <a href="#about">
                                    <div className="circle">
                                        <img className="scroll" src={ ScrollDown } alt="Scroll Down" />
                                        <img className="arrow-scroll" src={ ArrowDown } alt="Arrow" />
                                    </div>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Hero