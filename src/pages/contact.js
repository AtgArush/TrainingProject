import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroMain"
import DuelBlock from "../components/Reusable/DuelInfoBlock"
import DuelBlockTwo from "../components/Reusable/duelBlocknobtn"
import Contact from "../components/Contact/contact"
import Myblock from "../components/Reusable/Myblocknobtn"
import MyCarousel from "../components/Contact/Carousel"
const ContactPage = ({data}) => (
  <>
  <Layout>
    <SEO title="Home" />
    <HeroSection
    img = {data.fileName.childImageSharp.fluid}
    title = "Contact Us"
    subtitle = "learn code online"
    heroclass = "about-background"
    ></HeroSection>
    <Myblock heading ="How Can We Help You ??" givenBG="bg-theme" />
    <MyCarousel contactbgc = "colouring" headingLine="24/7 Online" />
    <DuelBlockTwo heading="Please Be Our Guest" imageUrl="https://images.pexels.com/photos/4831/hands-coffee-smartphone-technology.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
    <MyCarousel headingLine="Talk To Us" mybg="https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg" />
    <DuelBlock heading="Our Task" imageUrl = "https://images.pexels.com/photos/879143/pexels-photo-879143.jpeg" />
    <Myblock heading ="Your Opinion Means Everything To Us" givenBG="bg-theme" />
    <Contact />
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

export default ContactPage
