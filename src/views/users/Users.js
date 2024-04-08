import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CNav,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilPencil,
} from '@coreui/icons'
import ModalDelete from '../../components/modal/ModalDelete'
import Pagination from '../../components/pagination/ModalDelete'

const Users = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/users").then((response) => setUsers(response.data))
      .catch((err) => {
        console.error("Oops! An error occurred: " + err);
      });
  }, []);

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Users</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CRow>
                <CFormLabel htmlFor="search">Company / Email: </CFormLabel>
                <CCol sm={4}>
                  <CFormInput  id="search" />
                </CCol>
                <CButton color="light" className="col-sm-1 col-form-label">Search</CButton>
                <CButton color="primary" href='/users/edit' className="col-sm-1 col-form-label ms-3">New</CButton>
              </CRow>
            </CForm>

            <CNav variant="underline-border" className='mt-3'></CNav>
            <CTable striped>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">Id</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Company</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Registration</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Edit</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Delete</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>

                {users.map(user => (
                  <CTableRow key={user.email}>
                    <CTableDataCell>{user.name}</CTableDataCell>
                    <CTableDataCell>{user.last_name}</CTableDataCell>
                    <CTableDataCell>{user.email}</CTableDataCell>
                    <CTableDataCell>
                      <CButton>
                        <CIcon icon={cilCloudDownload} />
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                ))}

                <CTableRow>
                  <CTableDataCell>Vitor</CTableDataCell>
                  <CTableDataCell>Abb International</CTableDataCell>
                  <CTableDataCell>vitor@blong.com.br</CTableDataCell>
                  <CTableDataCell>04/08/2024</CTableDataCell>
                  <CTableDataCell>Active</CTableDataCell>
                  <CTableDataCell>
                    <CButton href="users/edit">
                      <CIcon icon={cilPencil} />
                    </CButton>
                  </CTableDataCell>
                  <CTableDataCell>
                    {ModalDelete()}
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
            {Pagination()}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Users
