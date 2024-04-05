import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CNav,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

const Tables = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/user").then((response) => setUsers(response.data))
      .catch((err) => {
        console.error("Oops! An error occurred: " + err);
      });
  }, []);

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Table</strong> <small>Simple Data Fetch Axios</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Data from Github:
            </p>

            <CNav variant="underline-border"></CNav>
            <CTable striped>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Last</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>

                {users.map(user => (
                  <CTableRow key={user.email}>
                    <CTableDataCell>{user.name}</CTableDataCell>
                    <CTableDataCell>{user.last_name}</CTableDataCell>
                    <CTableDataCell>{user.email}</CTableDataCell>
                  </CTableRow>
                ))}

                <CTableRow>
                  <CTableDataCell>Vitor</CTableDataCell>
                  <CTableDataCell>Pereira</CTableDataCell>
                  <CTableDataCell>vitor@abbint.net</CTableDataCell>
                </CTableRow>

              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>

    </CRow>
  )
}

export default Tables
