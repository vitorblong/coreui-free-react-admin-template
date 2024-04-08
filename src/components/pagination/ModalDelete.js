import React, { useState } from 'react'
import {
  CPagination,
  CPaginationItem,
} from '@coreui/react'

const Pagination = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CPagination align="center">
        <CPaginationItem aria-label="Previous" disabled>
          <span aria-hidden="true">&laquo;</span>
        </CPaginationItem>
        <CPaginationItem active>1</CPaginationItem>
        <CPaginationItem>2</CPaginationItem>
        <CPaginationItem>3</CPaginationItem>
        <CPaginationItem aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </CPaginationItem>
      </CPagination>
    </>
  )
}

export default Pagination
