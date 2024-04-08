import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormInput,
  CFormLabel,
  CFormFloating,
  CFormSelect,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const Settings = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Settings</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Settings
            </p>
            <DocsExample href="forms/floating-labels">
              <CFormFloating className="mb-3">
                <CFormInput type="email" id="floatingInput" placeholder="name@example.com" />
                <CFormLabel htmlFor="floatingInput">Email address</CFormLabel>
              </CFormFloating>
              <CFormFloating>
                <CFormInput type="password" id="floatingPassword" placeholder="Password" />
                <CFormLabel htmlFor="floatingPassword">Password</CFormLabel>
              </CFormFloating>
            </DocsExample>
            <p className="text-body-secondary small">
              When there&#39;s a <code>value</code> already defined, <code>&lt;CFormLabel&gt;</code>
              s will automatically adjust to their floated position.
            </p>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Settings
