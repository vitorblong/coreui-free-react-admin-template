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

const UsersEdit = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Users</strong>
          </CCardHeader>

          <CCardBody>
            <CForm className="row g-3">
              <CCol md={1}>
                <CFormInput id="id" label="Id" disabled/>
              </CCol>

              <CCol md={4}>
                <CFormInput id="company" label="Company" />
              </CCol>

              <CCol md={4}>
                <CFormInput type="email" id="inputEmail4" label="E-mail" />
              </CCol>

              <CCol md={2}>
                <CFormInput id="registration" label="Registration" disabled/>
              </CCol>

              <CNav variant="underline-border"></CNav>

              <div className="row justify-content-md-center mt-4">
                <CCol xs={1}>
                  <CButton color="primary" type="submit">Save</CButton>
                </CCol>
                <CCol xs={1}>
                  <CButton color="light" type="submit" href="/users">Cancel</CButton>
                </CCol>
              </div>

            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default UsersEdit
