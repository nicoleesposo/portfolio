import React from 'react'
import PDF from '../assets/file/Nicole Esposo - January 2021.pdf'

const Resume = () => {
    return(
        <>
            <div className="card-temp-s">
                <div className="content">
                    <div className="img">
                        <div className="inner">
                            <h3>Like what you're seeing?</h3>
                            <p>If you're looking for a web developer that's fun and creative, check my resume. You might want me on your team.</p>
                            <a href={ PDF } target="_blank" className="link">Download my Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume;