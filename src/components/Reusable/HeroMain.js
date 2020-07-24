import React from 'react'
import BackgroundImage from 'gatsby-background-image'


export default function HeroMain({img,title,subtitle,HeroClass}) {
    return (
        <div style={{marginBottom: "35px"}}>
            <BackgroundImage
            className = {HeroClass}
          fluid={img}
        >
            <h1 className="text-white text-uppercase text-center display-3">{title}</h1>
            <div>
                <h4 className="text-warning" >{subtitle}</h4>
            </div>
        </BackgroundImage>
        </div>
    )
}
