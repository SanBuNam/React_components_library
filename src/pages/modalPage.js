import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import ModalLayout from "../components/modals/modalLayout"

const ModalRoot = styled.div`
  position: relative;
  z-index: 999;
`

// https://codeburst.io/reacts-portals-in-3-minutes-9b2efb74e9a9

const ModalPage = () => (
  <Layout>
    <SEO title="modal" />
    <div className="app-root">
      <h1>Modal Page</h1>
      <Link to="/">Go back HOMEEEEEEEEE</Link>
    </div>
    <ModalLayout />
  </Layout>
)

export default ModalPage
