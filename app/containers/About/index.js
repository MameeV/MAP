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
    const headStyle={
      width: "100%",
      height: "80px",
      top: "auto",
      borderTop: "3px solid #89B613",
      borderBottom: "3px solid #89B613",
      background: "#DDCEBA",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      fontFamily: "Merriweather",
      fontWeight: "bold",
      fontSize: "40px",
      color: "#3E262A",
      textAlign: "center",
      paddingTop: "10px"
    }
    const mainphotoStyle={
      borderRadius: "2%",
      width: "450px",
      height: "300px",
      margin: "15px"
    }
    const bodyStyle={
      width: "100%",
      height: "100vh",
      background: "#FAE0EE",
      fontFamily: "Merriweather",
      fontWeight: "Bold",
      fontSize: "20px",
      color: "#3E262A",
      paddingTop: "30px",
      paddingLeft: "25px"
    }
    const indentStyle={
      margin: "15px"
    }
    const contentContainer={
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      width: "100%",
      maxWidth: "1000px",
      justifyContent: "space-around",
      background: "#DDCEBA",
      margin: "0 auto"
    }
    const contentContainerMobile={
      display: "flex",
      flexDirection: "column",
      width: "100%",
      background: "#FAE0EE"
    }
    const content={
      width: "25%",
      display: "flex",
      flexDirection: "column"
    }
    const contentMobile={
      width: "100%",
      display: "flex",
      flexDirection: "column"
    }
    const contentImage={
      width: "100%",
      height: "auto"
    }
    const contentTitle={
      width: "100%",
      height: "120px",
      fontFamily: "Merriweather",
      fontWeight: "Bold",
      fontSize: "20px",
      color: "#3E262A",
      textShadow: "2px 5px 15px #89B613",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      textAlign: "center",
      textOverflow: "ellipsis",
      paddingTop: "15px",
      paddingLeft: "15px",
      paddingRight: "15px"
    }
    const contentBody={
      width: "100%",
      height: "80px",
      maxHeight: "100px",
      fontFamily: "Merriweather",
      fontWeight: "Medium",
      fontSize: "16px",
      color: "#3E262A",
      textAlign: "center",
      paddingTop: "20px",
      paddingLeft: "35px",
      paddingRight: "35px",
      marginBottom: "35px"
    }
    const arrowStyle={
      fontSize: "1.5em",
      color: "#89B613",
      paddingTop: "30px"
    }
    const footerStyle={
      width: "100%",
      height: "20px",
      background: "#EDBBCB"
    }


    return (
      <div>
        <Helmet title="About" meta={[ { name: 'description', content: 'Description of Home' }]}/>
        <header style={headStyle}>
          Medical Advocacy Partners
        </header>

        <main>


          <div style={contentContainer}>
            <div style={content}>
              <div style={contentImage}>
              Image for the Content
              </div>
              <div style={contentTitle}>
              Teaching Presentation Title
              </div>
              <div style={contentBody}>
              Go To Website <span style={arrowStyle}> &#10173; </span>
              </div>
            </div>

            <div style={content}>
              <img style={contentImage}
              src="http://h4z.it/Image/a5823c_MAP.jpg"/>
              <div style={contentTitle}>
              Another Presentation Title
              </div>
              <div style={contentBody}>
              Go To Website <span style={arrowStyle}> &#10173; </span>
              </div>
            </div>

            <div style={content}>
              <div style={contentImage}>
              Image for the Content
              </div>
              <div style={contentTitle}>
              Teaching Presentation Title
              </div>
              <div style={contentBody}>
              Go To Website <span style={arrowStyle}> &#10173; </span>
              </div>
            </div>
          </div>
        </main>
        <footer style={footerStyle}>
              Created by Suzette Verbeck
        </footer>
      </div>
    );
  }
}
