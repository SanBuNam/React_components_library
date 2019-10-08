import React, { Fragment, Component } from "react"
import Modal from "./modal"
// import styled from "styled-components"

class ModalLayout extends Component {
  state = {
    showModal: false,
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    })
  }

  render = () => (
    <Fragment>
      <Modal open={this.state.showModal} onClose={this.toggleModal}>
        <ul>
          <li>1. Service Menu one</li>
          <li>2. Service Menu two</li>
          <li>3. Service Menu three</li>
          <li>4. Service Menu four</li>
        </ul>
      </Modal>
      <button onClick={this.toggleModal}>Show Modal?</button>
    </Fragment>
  )
}

export default ModalLayout
