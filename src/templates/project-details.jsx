import React from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import * as styles from "../styles/project-details.module.css"

function ProjectDetails() {
  return (
    <Layout>
      <div className={styles.details}>
        <h2>title</h2>
        <h3>stack</h3>
        {/* <div className={styles.details} ><Img fluid={} /></div> */}
      </div>
      {/* <div dangerouslySetInnerHTML={}className={styles.html}  /> */}
    </Layout>
  )
}

export default ProjectDetails
