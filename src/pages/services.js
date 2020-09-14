import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroMain"
import MyCarousel from "../components/Services/MyCarousel"
import Services from "../components/Services/imageSlider3"
import DuelBLockAbout from "../components/Reusable/duelBlocknobtn"
import ServiceCard from "../components/Services/servicesCard"
import InfoBlock from "../components/Reusable/InfoBlock"
import MyHeadin from "../components/Reusable/Heading"
const IndexPage = ({data}) => (
  <>
  <Layout>
    <SEO title="Home" />
    <HeroSection
    img = {data.fileName.childImageSharp.fluid}
    title = "I Write Code"
    subtitle = "Arush Sharma"
    heroclass = "service-background"
    ></HeroSection>
    <DuelBLockAbout heading = "Services" imageUrl = "https://images.pexels.com/photos/3760093/pexels-photo-3760093.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
    <InfoBlock heading = "We Are Here For You" givenBG = "infoBG" />
    <MyCarousel linker = "/contact"/>
    <Services 
    slideOne= "../../images/slider/slider1.jpg"
    slideTwo ="../../images/slider/slider2.jpg"
    slideThree= "../../images/slider/slider3.jpg"
    slideFour = "../../images/slider/slider4.jpg"
    />

    <DuelBLockAbout heading="Start Your Carrier Today" imageUrl="https://images.pexels.com/photos/3826678/pexels-photo-3826678.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
  <MyHeadin title = "Our Fields" />
  <ServiceCard/>
  <DuelBLockAbout heading="Just a Click Away!!" imageUrl="https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
  </Layout>
  </>
)

export const query = graphql `
{
  fileName: file(relativePath: { eq: "mybgc.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 4000, maxHeight: 2500) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default IndexPage
