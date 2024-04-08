import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CNav,
  CRow,
} from '@coreui/react'

const LicensesEdit = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Licenses </strong>
          </CCardHeader>

          <CCardBody>
            <CForm className="row g-3">
              <CCol md={2}>
                <CFormInput id="id" label="Id" disabled/>
              </CCol>

              <CCol md={6}>
                <CFormInput id="company" label="Company" />
              </CCol>

              <CCol md={2}>
                <CFormInput id="date_start" label="Date Start" />
              </CCol>

              <CCol md={2}>
                <CFormInput id="date_end" label="Date End" />
              </CCol>


              <CNav variant="underline-border"></CNav>

              <div className="row justify-content-md-center mt-4">
                <CCol xs={1}>
                  <CButton color="primary" type="submit">Save</CButton>
                </CCol>
                <CCol xs={1}>
                  <CButton color="light" type="submit" href="/licenses">Cancel</CButton>
                </CCol>
              </div>

            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default LicensesEdit
