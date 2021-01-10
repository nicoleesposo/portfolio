import React from 'react'

const CardLarge = (props) => {
    return(
        <>
            <a href="#top" rel="noreferrer">
                <div class="card-temp-l">
                    <div class="img">
                        <img src={ props.image } alt={ props.title } />
                    </div>
                    <div class="card-bot">
                        <h5>{ props.title }</h5>
                        <div class="badges">
                            <span class="badge">{ props.badge1 }</span>
                            <span class="badge">{ props.badge2 }</span>
                            <span class="badge">{ props.badge3 }</span>
                            <span class="badge">{ props.badge4 }</span>
                            <p>{ props.description }</p>
                        </div>
                    </div>
                </div>
            </a>
        </>
    )
}

export default CardLarge