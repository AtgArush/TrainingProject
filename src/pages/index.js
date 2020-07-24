import React from "react"
import { graphql} from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import HerSection from "../components/Reusable/HeroMain"
import { Parallax} from "react-parallax"
import DuelBlock from "../components/Reusable/DuelInfoBlock"
import InfoBlock from "../components/Reusable/InfoBlock"
import ImageSlider from "../components/imageSlider7"
import TeamCard from "../components/indexCard"
import LCOCourseBlock from "../components/Cart/courseCart"
const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HerSection 
    img = {data.fileName.childImageSharp.fluid}
    title = "I write code on editor"
    subtitle = "LCO"
    HeroClass = "hero-background"
    />
    <InfoBlock heading="Welcome" givenBG="infoBG"/>
    <ImageSlider/>
    <DuelBlock heading = "Our Team" linker = "/about" imageUrl="https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
    <Parallax
        blur={0}
        bgImage={require("../images/pexels.jpeg")}
        bgImageAlt="the dog"
        strength={400}
        >
        <InfoBlock heading="About Us"/>
    </Parallax> 
    <DuelBlock linker = "/services" heading = "Services" imageUrl = "https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
    <TeamCard />
  </Layout>
)

export const query = graphql`
{
  fileName: file(relativePath: { eq: "abcd.jpg" }) {
      childImageSharp {
        fluid {
					...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    mycourses:allContentfulCourses{
      edges {
        node {
          id
          title
          price
          category
          description{
            description
          }
          image {
            fixed(width:200 height:120){
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
}
`


export default IndexPage
