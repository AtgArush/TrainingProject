import React from 'react'
import{ Parallax } from "react-parallax"
import { Link } from 'gatsby'
export default function MyCarousel({mybg,contactbgc,headingLine}) {
    return (
        <Parallax bgImage = {mybg} strength = "900">
          <div className={contactbgc}>
        <div className="jumbotron mb-5 mt-5" >
    <h1 className="display-4" style={{fontSize: "75px", fontWeight: "400"}} ><span className={contactbgc}>{headingLine}</span> </h1>
        <p className="lead" style={{fontSize: "25px"}}> <span className={contactbgc}> Please Help Us Improve, Your Word Works Wonders For Us </span> </p>
        <hr className="my-4" />
        <p className = {contactbgc} > RANDOM TEXT  It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Link className="btn btn-primary btn-lg" to = "/" role="button"> <span className = {contactbgc}></span> Learn more</Link>
        </p>
      </div>
      </div>
      </Parallax>
    )
}
