/*
 *
 * About
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from "react-router";

export default class About extends React.PureComponent {
  render() {
    const divStyle={
      width:"200px",
      height:"400px",
      background:"#3E262A"
    }
    const titleStyle={
      display: "flex",
      flexDirection: "row",
      fontFamily:"Merriweather"
    }
    const titleSize={
      width: "100vh",
      height: "60px"
    }
    const sideStyle={
      width: "10%",
      height: "100vh",
      background: "#B4938C"
    }
    const bodyStyle={
      width: "90%",
      height: "100vh",
      background: "#FAE0EE"
    }
    const mainStyle={
      display: "flex",
      flexDirection: "row"
    }
    const footerStyle={
      width: "100%",
      height: "20px",
      background: "#74D1EA"
    }
    const mainphotoStyle={
      borderRadius: "2%",
      width: "450px",
      height: "300px",
      margin: "15px"
    }

    return (
      <div>
        <Helmet title="About" meta={[ { name: 'description', content: 'Description of Home' }]}/>
        <header>
        <span style={titleStyle}>

            Hello World! My Name is Suzette

        </span>
        </header>
        <main style={mainStyle}>
          <div style={sideStyle}>
          <nav>
            <div>
            <Link to="/"> Home </Link>
            </div>
            <Link to="/About"> About </Link>
          </nav>
          </div>
          <div style={bodyStyle}>
            <div>
              Medical Advocacy Partners
            </div>
            <img style={mainphotoStyle}
            src="http://h4z.it/Image/a5823c_MAP.jpg"/>
          </div>
        </main>
        <footer style={footerStyle}>
            <div>
              Created by Suzette Verbeck
            </div>
        </footer>
      </div>
    );
  }
}
