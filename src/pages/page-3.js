import React from "react"
import { Link } from "gatsby"

import Layout from "../hoc/layout"
import SEO from "../components/seo"

const Page3 = () => (
  <Layout>
    <SEO title="About" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Page3
