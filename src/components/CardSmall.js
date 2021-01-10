import React from 'react'
import { Col } from 'react-bootstrap'

const CardSmall = (props) => {
    return(
        <>
            <Col lg={ 6 } sm={ 12 }>
                <a href= {`${ props.url }`} target="_blank" rel="noreferrer">
                    <div className="card-temp-s">
                        <div className="content">
                            <div className="img">
                                <img src={ props.image } alt={ props.title } />
                            </div>
                            <div className="card-bot">
                                <h5>{ props.title }</h5>
                                <div className="badges">
                                    <span className="badge">{ props.badge1 }</span>
                                    <span className="badge">{ props.badge2 }</span>
                                    <span className="badge">{ props.badge3 }</span>
                                    <span className="badge">{ props.badge4 }</span>
                                    <p>{ props.description }</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </Col>
        </>
    )
}

export default CardSmall