import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const HeaderImage = () => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "Mathe-Nerd-Mathe-lernen-online.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1860) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
  
    return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
  }
  
  export default HeaderImage
  