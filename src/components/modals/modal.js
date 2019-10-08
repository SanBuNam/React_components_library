import React from "react"
import ReactDOM from "react-dom"

const Modal = ({ children, onClose, open }) =>
  open
    ? ReactDOM.createPortal(
        <div>
          <div onClick={onClose}></div>
          {children}
        </div>,
        document.body
      )
    : null

export default Modal
