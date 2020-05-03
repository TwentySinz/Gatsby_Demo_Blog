import React from 'react';
import Link from 'gatsby-link';
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

const Blog = ({data}) => {
    return(
      <Layout>
      <SEO title="Blog" />
        <div>
            <h1>Blog Posts</h1>
            <div className="flex flex-wrap mb-4">
              {data.allMarkdownRemark.edges.map(post => (
                  <div key={post.node.id} className="max-w-sm rounded overflow-hidden shadow-lg mr-4 mb-4 bg-gray-200">
                    <Img fluid={post.node.frontmatter.image.childImageSharp.fluid} className="w-full" />
                    <div className="px-6 py-4">
                      <h3 className="text-2xl font-bold my-2">{post.node.frontmatter.title}</h3>
                      <p className="text-gray-700 text-base">{post.node.excerpt}</p>
                      <Link to={post.node.frontmatter.path} className="block mb-3 text-gray-700 text-base hover:text-gray-600">Mehr lesen..</Link>
                      <br/>
                      <hr/>
                      <small className="text-gray-500">Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
                      
                    </div>
                  </div>
              ))}
            </div>
        </div>
      </Layout>
    )
}

export const pageQuery = graphql` 
query BlogIndexQuery{
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                path
                title
                date
                author
                image{
                  childImageSharp{
                    fluid(maxWidth: 500){
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              excerpt
            }
          }
        }
      

}`

export default Blog