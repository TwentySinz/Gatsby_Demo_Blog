import React from 'react';
import Link from 'gatsby-link';
import Layout from '../components/layout';
import SEO from "../components/seo"
import "katex/dist/katex.min.css"

export default function Template({data}) {
    const post = data.markdownRemark;

    return(
        <div>
            <Layout>
            <SEO title={post.frontmatter.title} />
                <h1>{post.frontmatter.title}</h1>
                
                <div dangerouslySetInnerHTML={{__html: post.html}} className="mb-4" />
                <Link to="/blog" className="block mb-3 text-base hover:text-gray-600">Zurück...</Link>
                <hr/>
                <h6>Posted by {post.frontmatter.author} on {post.frontmatter.date}</h6>
            </Layout>
        </div>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!){
        markdownRemark(frontmatter: { path:{eq: $path }}){
            html
            frontmatter {
                path
                title
                author
                date
            }
        }
    }
`
