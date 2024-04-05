import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormSelect,
  CRow,
} from '@coreui/react'

const Form = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Form</strong> <small>Form Example</small>
          </CCardHeader>

          <CCardBody>
            <CForm className="row g-3">
              <CCol md={6}>
                <CFormInput type="email" id="inputEmail4" label="Email" />
              </CCol>
              <CCol md={6}>
                <CFormInput type="password" id="inputPassword4" label="Password" />
              </CCol>
              <CCol xs={12}>
                <CFormInput id="inputAddress" label="Address" placeholder="1234 Main St" />
              </CCol>
              <CCol xs={12}>
                <CFormInput id="inputAddress2" label="Address 2" placeholder="Apartment, studio, or floor" />
              </CCol>
              <CCol md={6}>
                <CFormInput id="inputCity" label="City" />
              </CCol>
              <CCol md={4}>
                <CFormSelect id="inputState" label="State">
                  <option>Choose...</option>
                  <option>...</option>
                </CFormSelect>
              </CCol>
              <CCol md={2}>
                <CFormInput id="inputZip" label="Zip" />
              </CCol>
              <CCol xs={12}>
                <CFormCheck type="checkbox" id="gridCheck" label="Check me out" />
              </CCol>
              <CCol xs={12}>
                <CButton color="primary" type="submit">Sign in</CButton>
              </CCol>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Form
