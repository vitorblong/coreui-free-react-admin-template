import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormSelect,
  CNav,
  CRow,
} from '@coreui/react'

const CustomerEdit = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Customer </strong> <small>Tenant Users</small>
          </CCardHeader>

          <CCardBody>
            <CForm className="row g-3">
              <CCol md={3}>
                <CFormInput id="contact" label="Contact" />
              </CCol>

              <CCol md={6}>
                <CFormInput id="company" label="Company" />
              </CCol>

              <CCol md={3}>
                <CFormSelect id="status" label="Status">
                  <option>Active</option>
                  <option>Disabled</option>
                  <option>Pending</option>
                </CFormSelect>
              </CCol>

              <CCol md={4}>
                <CFormInput id="address" label="Address" />
              </CCol>

              <CCol md={3}>
                <CFormInput id="address2" label="Address 2" placeholder="Apartment, studio, or floor" />
              </CCol>

              <CCol md={3}>
                <CFormInput id="city" label="City" />
              </CCol>

              <CCol md={2}>
                <CFormInput id="state" label="State" />
              </CCol>

              <CCol md={2}>
                <CFormInput id="zip" label="Zip" />
              </CCol>

              <CCol md={3}>
                <CFormInput id="country" label="Country" />
              </CCol>

              <CCol md={3}>
                <CFormInput id="phone" label="Phone" />
              </CCol>

              <CCol md={4}>
                <CFormInput type="email" id="inputEmail4" label="E-mail" />
              </CCol>

              <CCol md={6}>
                <CFormInput id="website" label="WebSite" />
              </CCol>

              <CCol md={2}>
                <CFormInput id="database_url" label="Database" disabled />
              </CCol>

              <CCol md={2}>
                <CFormInput id="storage_url" label="Storage" disabled />
              </CCol>

              <CCol md={2}>
                <CFormInput id="registration" label="Registration" disabled />
              </CCol>






              {/* 
              <CCol md={6}>
                <CFormInput type="password" id="inputPassword4" label="Password" />
              </CCol>
               */}

              <CNav variant="underline-border"></CNav>

              <div className="row justify-content-md-center mt-4">
                <CCol xs={1}>
                  <CButton color="primary" type="submit">Save</CButton>
                </CCol>
                <CCol xs={1}>
                  <CButton color="light" type="submit" href="/customers">Cancel</CButton>
                </CCol>
              </div>

            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default CustomerEdit
