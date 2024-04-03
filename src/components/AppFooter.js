import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <a href="https://www.abbint.net/" target="_blank" rel="noopener noreferrer">
          Abb International Inc
        </a>
      </div>
      <div className="ms-auto">
        <span className="ms-1">&copy; {new Date().getFullYear()} All Rights Reserved.</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
