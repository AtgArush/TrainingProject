import React from 'react'
import{ Parallax } from "react-parallax"
import { Link } from 'gatsby'
export default function MyCarousel({linker}) {
    return (
        <Parallax bgImage = "https://images.pexels.com/photos/911738/pexels-photo-911738.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" strength = "900">
        <div className="jumbotron mb-5 mt-5 jumbotronService ">
        <h1 className="display-4" style={{fontSize: "75px", fontWeight: "400"}} >Our Services </h1>
        <h5 className="lead"  style={{fontSize: "35px"}}>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</h5>
        <hr className="my-4" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Link className="btn btn-primary btn-lg" to = {linker} role="button">Learn more</Link>
        </p>
      </div>
      </Parallax>
    )
}
