import React from "react"
import { graphql} from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import HerSection from "../components/Reusable/HeroMain"
import { Parallax} from "react-parallax"
import DuelBlock from "../components/Reusable/duelBlocknobtn"
import InfoBlock from "../components/Reusable/InfoBlock"
import PhotoSection from "../components/myTeam"
import MyHeading from "../components/Reusable/Heading"
import Imager from "../components/About/imageSlider"
const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HerSection 
    img = {data.fileName.childImageSharp.fluid}
    title = "About Learn Code Online"
    HeroClass = "about-background"
    />
    <Imager />
    <DuelBlock heading = "A Message from CEO" imageUrl = "https://images.pexels.com/photos/618613/pexels-photo-618613.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
    <Parallax
            blur={0}
            bgImage={require("../images/aboutParallax2.jpg")}
            bgImageAlt="the dog"
            strength={400}
        >
            <InfoBlock heading="Our Vision"/>
        </Parallax>
        <div style={{height: "35px"}}>

        </div>
        <DuelBlock heading = "Our Mission" imageUrl = "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        
        <MyHeading title="Our Team" myClass = "myteam" />
        <PhotoSection/>
        <div style={{height: "55px"}} className="coloring">
        </div>
        <DuelBlock heading = "Our Journey" imageUrl = "https://images.pexels.com/photos/38537/woodland-road-falling-leaf-natural-38537.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <DuelBlock heading = "And Beyond" imageUrl = "https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        
  </Layout>
)

export const query = graphql`
{
  fileName: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid {
					...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
}
`

export default AboutPage
