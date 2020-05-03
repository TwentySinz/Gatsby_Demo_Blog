/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Link from 'gatsby-link';

import Header from "./header"
import Menu from "./menu"
import "../css/tailwind.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Menu/>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="font-sans-serif p-8 my-4 container mx-auto shadow">
          <main>{children}</main>
        </div>
        <footer className="bg-pink-600 p-4">
          <ul className="lg:flex container mx-auto text-white justify-between">
            <li>
              <ul className="lg:flex">
                <li className="mx-4 my-1">
                  <a href="https://www.youtube.com/channel/UCyQgMewLfpdtt2jGtJsgqyQ" target="blank" className="hover:text-gray-400">Youtube</a>
                </li>
                <li className="mx-4 my-1">
                  <a href="https://de-de.facebook.com/matheonlinelernen/" target="blank" className="hover:text-gray-400">Facebook</a>
                </li>
                <li className="mx-4 my-1"><Link to="/impressum" className="hover:text-gray-400">Impressum</Link></li>
              </ul>
            </li>
            <li className="mx-4 my-1">© {new Date().getFullYear()}, Mathe Nerd</li>
          </ul>
        </footer>
      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
