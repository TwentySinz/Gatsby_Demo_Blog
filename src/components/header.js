import PropTypes from "prop-types"
import React from "react"
import HeaderImage from "./headerImage"

const Header = ({ siteTitle }) => (
  <header className="hidden md:block">
    <HeaderImage/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
