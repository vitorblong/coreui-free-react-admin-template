import React, { useState } from 'react'
import CIcon from '@coreui/icons-react'
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from '@coreui/react'
import {
  cilTrash,
} from '@coreui/icons'

const ModalDelete = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton onClick={() => setVisible(!visible)}>
        <CIcon icon={cilTrash} />
      </CButton>
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Delete</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Are you sure want to delete this?
        </CModalBody>
        <CModalFooter>
          <CButton color="danger">
            Yes
          </CButton>
          <CButton color="light" onClick={() => setVisible(false)}>
            No
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default ModalDelete
