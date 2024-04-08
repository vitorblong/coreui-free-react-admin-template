import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CNav,
} from '@coreui/react'

const About = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>About</strong> <small>About</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              About
            </p>
            <CNav variant="underline-border"></CNav>
            <p className="text-body-secondary small">
              About
            </p>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default About
