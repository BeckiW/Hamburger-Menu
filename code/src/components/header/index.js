import React from "react"
import Grid from "lib/grid"

import "./style.css"

class Header extends React.Component {

  render() {

    const toggleRotation = () => {
      document.getElementById("hamburger-container").classList.toggle("rotate")
    }

    return (
      <header>
        <Grid className="header-grid">
          <label htmlFor="hamburger" className="con">
            <div id="hamburger-container" onClick={toggleRotation}>
              <div className="bar top"></div>
              <div className="bar middle"></div>
              <div className="bar bottom"></div>
            </div>
          </label>
          <input id="hamburger" type="checkbox" className="hamburger-checkbox" />
          <div className="menu">
            <a href="">Technigo</a>
            <a href="">Boot Camp</a>
            <a href="">Stories</a>
            <a href="">About</a>
          </div>
        </Grid>
</header>
    )
  }

}

export default Header
