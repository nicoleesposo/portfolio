import React from 'react'
import Nav from '../src/components/Nav'
import Social from '../src/components/Social'
import Hero from '../src/components/Hero'
import About from '../src/components/About'
import CardLarge from '../src/components/CardLarge'
import CardSmall from '../src/components/CardSmall'
import Resume from '../src/components/Resume'
import Footer from '../src/components/Footer'

import PlaceholderImg from '../src/assets/images/placeholder-image.jpg'
import IKO from '../src/assets/images/iko.PNG'
import HappyHues from '../src/assets/images/happy-hues-2.PNG'
import Wedding from '../src/assets/images/wedding-connection-2.PNG'
import Portfolio from '../src/assets/images/portfolio.PNG'
import MyPocket from '../src/assets/images/my-pocket-2.png'
import CSS from '../src/assets/images/css-illustration-2.PNG'
import FabFitFun from '../src/assets/images/fabfitfun.PNG'
import CQuest from '../src/assets/images/creative.PNG'
import Riyo from '../src/assets/images/riyo.PNG'

import { Container, Row, Col } from 'react-bootstrap'

const Home = () => {
    return (
        <>
            <Nav />
            <Social />
            <main>
                <div className="black">
                    <Hero />
                    <About />
                </div>

                <div className="white section" id="works">
                    <div className="works">
                        <Container fluid="lg">
                            <Row>
                                <Col xl={{ span: 12, offset: 0 }} lg={{ span: 10, offset: 1 }} md={{ span: 12, offset: 0 }} sm={{ span: 12, offset: 0 }} xs={{span: 12, offset: 0 }}>
                                    <h2>Explore <br />my works.</h2>
                                    <CardLarge 
                                        image={ Portfolio }
                                        title="Personal Website"
                                        description="This is the latest personal portfolio I developed using ReactJS. Before coding it, I conceptualized the design in Figma."
                                        badge1="ReactJS"
                                        badge2="HTML"
                                        badge3="CSS"
                                        badge4="React Bootstrap"
                                    />
                                </Col>
                                <Col xl={{ span: 12, offset: 0 }} lg={{ span: 10, offset: 1 }} md={{ span: 12, offset: 0 }} sm={{ span: 12, offset: 0 }} xs={{span: 12, offset: 0 }} className="sm-cards">
                                    <Row>
                                        <CardSmall 
                                            url='https://nicoleesposo.github.io/my-pocket-js-app/'
                                            image={ MyPocket }
                                            title="My Pocket: Budget Dashboard"
                                            description="My Pocket can help you track your budget, use graph to show your progress, and keep your expense and income tracked."
                                            badge1="HTML"
                                            badge2="CSS"
                                            badge3="Javascript"
                                        />
                                        <CardSmall 
                                            url='https://nicoleesposo.github.io/wedding-connections-redesigned/'
                                            image={ Wedding }
                                            title="Wedding Connections"
                                            description="Wedding Connection is a one-stop bridal and debut shop in Makati. Here we've redesigned the site as responsive using Bootstrap."
                                            badge1="HTML"
                                            badge2="CSS"
                                            badge3="Bootstrap"
                                        />
                                        <CardSmall 
                                            url='https://nicoleesposo.github.io/happy-hues-clone/'
                                            image={ HappyHues }
                                            title="Happy Hues Clone"
                                            description="I love the concept of this website that is why I chose Happy Hues to clone. What's amazing is the site's responsive using only HTML and CSS."
                                            badge1="HTML"
                                            badge2="CSS"
                                        />
                                        <CardSmall 
                                            url='https://nicoleesposo.github.io/css-illustration/'
                                            image={ CSS }
                                            title="CSS Illustration"
                                            description="Who doesn't like a good mountain view? I know I do! Inspired by the mountains and the lakes, I created this illustration while wishing I was there in real life."
                                            badge1="HTML"
                                            badge2="CSS"
                                        />
                                        <CardSmall 
                                            url='https://nicoleesposo.github.io/fabfitfun/'
                                            image={ FabFitFun }
                                            title="FabFitFun Clone"
                                            description="For a landing page challenge, I was inspired by this site. Created a cloned, responsive site using Flexbox. Go check it out! Yes, right now."
                                            badge1="HTML"
                                            badge2="CSS"
                                        />
                                        <CardSmall 
                                            url='https://iko-mern.herokuapp.com/'
                                            image={ IKO }
                                            title="IKO"
                                            description="IKO is a great way to find the best vacation spots and resorts in the Philippines through shared vacation and lodging experiences.
                                            "
                                            badge1="MongoDB"
                                            badge2="ExpressJS"
                                            badge3="ReactJS"
                                            badge4="NodeJS"
                                        />
                                        <CardSmall 
                                            url='https://www.figma.com/proto/W43BYINNAOW18rx12zQTYw/Creative-Quest?node-id=1%3A2'
                                            image={ CQuest }
                                            title="Creative Quest"
                                            description="Created this prototype for a web design contest. I was inspired by dark mode and I think it really complements red."
                                            badge1="Figma"
                                        />
                                        <CardSmall 
                                            url='https://www.figma.com/proto/L0HcJQMpeL2mCjVLpHAeBv/Riyo.io?node-id=1%3A2'
                                            image={ Riyo }
                                            title="Riyo"
                                            description="Also created this for a web design contest. It's my first time diving into using illustrations in prototype and I thought it looked cool."
                                            badge1="Figma"
                                        />
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="resume">
                        <Container fluid="lg">
                            <Row>
                                <Col xl={{ span: 12, offset: 0 }} lg={{ span: 10, offset: 1 }} md={{ span: 12, offset: 0 }} sm={{ span: 12, offset: 0 }} xs={{span: 12, offset: 0 }}>
                                    <Resume />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <div className="black">
                    <Footer />
                </div>
            </main>
        </>
    );
}

export default Home